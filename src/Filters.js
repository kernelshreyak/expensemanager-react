export default function Filters ({accounts}) {

  function getDate(adddays){
    let currentdate = new Date();
    if(adddays){
      currentdate.setDate(currentdate.getDate() + adddays);
    }

    return currentdate.toJSON().slice(0,10).replace(/-/g,'-');
  }

  return (
    <p>

      <select id="filter_cattype">
        <option value="">All categories</option>
        <option>Expense</option>
        <option>Income</option>
        <option>Transfer</option>
      </select>

      <select id="filter_accid">
        <option value="">All Accounts</option>
        {
          accounts.map((account,index) => 
            <option key={index} value={account.account_id}>{account.accountname}</option>
          )
        }
      </select>

      <input id="filter_catname" type="text" placeholder="Category Name" />
      <input id="filter_note"  type="text" placeholder="Note" />
    
      <select id="filter_sortdate">
        <option value="0">Sort By Date</option>
        <option value="-1">Date DESC</option>
        <option value="1">Date ASC</option>
      </select>
      <select id="filter_sortamount">
        <option value="0">Sort By Amount</option>
        <option value="-1">Amount DESC</option>
        <option value="1">Amount ASC</option>
      </select>

     <p>
     Start Date: <input type="date" id="filter_startdate" defaultValue={"2020-01-01"} /> 
     <br />
     End Date: <input type="date" id="filter_enddate" defaultValue={getDate()} />
     </p>
    </p>

  )
}