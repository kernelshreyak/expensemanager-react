import "./styles.css";
import {useEffect,useState} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Filters from "./Filters";

const apiBaseURL = "http://localhost:3000";

export default function App() {

  const { loginWithRedirect,user, isAuthenticated } = useAuth0();

  const [transactions,setTransactions] = useState([]);
  const [totalamount,setTotalAmount] = useState(0.0);
  const [accounts,setAccounts] = useState([]);
  const [loaded,setLoaded] = useState(false);
  
  useEffect(()=>{
    console.log("init data loaded");
    viewTransactions();
    setLoaded(true);
  },[isAuthenticated]);

  const viewTransactions = async() => {
    if(!isAuthenticated) return;
    
    let cattype = document.getElementById("filter_cattype").value ?? "";
    let catname = document.getElementById("filter_catname").value ?? "";
    let note = document.getElementById("filter_note").value ?? "";
    let sortdate = document.getElementById("filter_sortdate").value ?? "";
    let sortamount = document.getElementById("filter_sortamount").value ?? "";
    let accid = document.getElementById("filter_accid").value ?? -1;
    let startdate = document.getElementById("filter_startdate").value;
    let enddate = document.getElementById("filter_enddate").value;

    let url = `${apiBaseURL}/transactions?cattype=${cattype}&catname=${catname}&note=${note}
    &sortdate=${sortdate}&sortamount=${sortamount}&accid=${accid}&startdate=${startdate}&enddate=${enddate}`;
    axios.get(encodeURI(url))
    .then(response => {
      const transactions_data = response.data;
      setTransactions(transactions_data);
      let total = 0;
      for(let i = 0;i < transactions_data.length;i++){
        total += transactions_data[i].amount;
      }
      setTotalAmount(total);
    });

    axios.get(apiBaseURL + "/accounts/")
    .then(response => {
      setAccounts(response.data);
    })
    .catch(error => {
      alert("Error:" + error);
    });
  }

  const addTransaction = async () =>{
    let data = {};
    data.transactiondate = document.getElementById("dateval").value;
    data.amount = document.getElementById("amount").value;
    data.categorytype = document.getElementById("categorytype").value;
    data.categoryname = document.getElementById("categoryname").value;
    data.note = document.getElementById("note").value;
    data.fromacc = document.getElementById("fromacc").value;
    data.toacc = document.getElementById("toacc").value;

    if(!data.transactiondate){
      alert("Transaction date must be present!");
      return;
    }
    if(data.fromacc === data.toacc){
      alert("From and To A/C cannot be same!");
      return;
    }

    axios.post(apiBaseURL + "/transaction/add",data)
    .then(response => {
      alert("Transaction Added!");
      viewTransactions();
    })
    .catch(error => {
      alert("Error:" + error);
    });
    
  }



  // Main View
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
      {
        isAuthenticated && 
        (
          <>
            <div style={{textAlign:"left"}}>
            <h3>Add New Transaction</h3>
            <p>Date: <input id="dateval" type="date" /></p>
            <p>Amount: <input id="amount" type="text" /></p>
            <p>
              Category Type: 
              <select id="categorytype">
                <option>Expense</option>
                <option>Income</option>
                <option>Transfer</option>
                <option>Adjustment</option>
              </select>
            </p>
            <p>Category Name: <input id="categoryname" type="text" /></p>
            <p>Note: <input id="note" type="text" /></p>
            <p>
              From A/C: 
              <select id="fromacc">
                {
                  accounts.map((account,index) => 
                    <option key={index} value={account.account_id}>{account.accountname}</option>
                  )
                }
                <option value="0">External</option>
              </select>
            </p>
            <p>
              To A/C:
              <select id="toacc">
                {
                  accounts.map((account,index) => 
                    <option key={index} value={account.account_id}>{account.accountname}</option>
                  )
                }
                <option value="0">External</option>
              </select>
            </p>
            <p><button onClick={addTransaction}>Add</button></p>
          </div>


          <br />
          <div>
            <Filters accounts={accounts}/>
            <p><button onClick={viewTransactions}>Filter</button></p>
            <p >
            
              <h3>Transactions List</h3>
              <p>
                {
                  accounts.map((account,index) => 
                  <p key={index}>
                    <b>{account.accountname} Balance: </b> ₹{parseFloat(account.balance).toFixed(2)}
                  </p>
                  
                  )
                }

                
              </p>
              <p>
                <b>Total Amount: </b> ₹{parseFloat(totalamount).toFixed(2)}
              </p>
              <table style={{backgroundColor:"#fffeed"}}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Category Type</th>
                    <th>Category Name</th>
                    <th>Note</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      transactions.map((transaction,index) => (
                        <tr>
                          <td>{transaction.date}</td>
                          <td style={
                            transaction.categorytype === "Expense" ? {backgroundColor:"#f5a698"} : 
                            (transaction.categorytype === "Transfer" ? {backgroundColor:"#e6e9fc"} : {backgroundColor:"#b8f2c2"})
                            }>{transaction.categorytype}</td>
                          <td>{transaction.categoryname}</td>
                          <td>{transaction.note}</td>
                          <td>₹{transaction.amount}</td>
                        
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </p>
          </div>
          </>
        )
      }


    </div>
  );
}
