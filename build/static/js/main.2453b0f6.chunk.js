(this["webpackJsonpexpense-manager-react"]=this["webpackJsonpexpense-manager-react"]||[]).push([[0],{31:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(19),r=c.n(a),o=c(5),i=c(3),l=c.n(i),d=c(9),s=c(7),j=(c(31),c(6)),u=c.n(j),b=c(0);function x(e){var t=e.accounts;return Object(b.jsxs)("p",{children:[Object(b.jsxs)("select",{id:"filter_cattype",children:[Object(b.jsx)("option",{value:"",children:"All categories"}),Object(b.jsx)("option",{children:"Expense"}),Object(b.jsx)("option",{children:"Income"}),Object(b.jsx)("option",{children:"Transfer"})]}),Object(b.jsxs)("select",{id:"filter_accid",children:[Object(b.jsx)("option",{value:"",children:"All Accounts"}),t.map((function(e,t){return Object(b.jsx)("option",{value:e.account_id,children:e.accountname},t)}))]}),Object(b.jsx)("input",{id:"filter_catname",type:"text",placeholder:"Category Name"}),Object(b.jsx)("input",{id:"filter_note",type:"text",placeholder:"Note"}),Object(b.jsxs)("select",{id:"filter_sortdate",children:[Object(b.jsx)("option",{value:"0",children:"Sort By Date"}),Object(b.jsx)("option",{value:"-1",children:"Date DESC"}),Object(b.jsx)("option",{value:"1",children:"Date ASC"})]}),Object(b.jsxs)("select",{id:"filter_sortamount",children:[Object(b.jsx)("option",{value:"0",children:"Sort By Amount"}),Object(b.jsx)("option",{value:"-1",children:"Amount DESC"}),Object(b.jsx)("option",{value:"1",children:"Amount ASC"})]}),Object(b.jsxs)("p",{children:["Start Date: ",Object(b.jsx)("input",{type:"date",id:"filter_startdate",defaultValue:"2020-01-01"}),Object(b.jsx)("br",{}),"End Date: ",Object(b.jsx)("input",{type:"date",id:"filter_enddate",defaultValue:function(e){var t=new Date;return e&&t.setDate(t.getDate()+e),t.toJSON().slice(0,10).replace(/-/g,"-")}()})]})]})}var h="http://localhost:3000";function p(){var e=Object(o.b)(),t=e.loginWithRedirect,c=(e.user,e.isAuthenticated),a=(e.isLoading,Object(n.useState)([])),r=Object(s.a)(a,2),i=r[0],j=r[1],p=Object(n.useState)(0),O=Object(s.a)(p,2),m=O[0],f=O[1],y=Object(n.useState)([]),v=Object(s.a)(y,2),g=v[0],E=v[1];Object(n.useEffect)((function(){c&&(console.log("init data loaded"),A())}),[]);var A=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,a,r,o,i,d,s,b,x,p,O,m,y;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=null!==(t=document.getElementById("filter_cattype").value)&&void 0!==t?t:"",d=null!==(c=document.getElementById("filter_catname").value)&&void 0!==c?c:"",s=null!==(n=document.getElementById("filter_note").value)&&void 0!==n?n:"",b=null!==(a=document.getElementById("filter_sortdate").value)&&void 0!==a?a:"",x=null!==(r=document.getElementById("filter_sortamount").value)&&void 0!==r?r:"",p=null!==(o=document.getElementById("filter_accid").value)&&void 0!==o?o:-1,O=document.getElementById("filter_startdate").value,m=document.getElementById("filter_enddate").value,y="".concat(h,"/transactions?cattype=").concat(i,"&catname=").concat(d,"&note=").concat(s,"\n    &sortdate=").concat(b,"&sortamount=").concat(x,"&accid=").concat(p,"&startdate=").concat(O,"&enddate=").concat(m),u.a.get(encodeURI(y)).then((function(e){var t=e.data;j(t);for(var c=0,n=0;n<t.length;n++)c+=t[n].amount;f(c)})),u.a.get(h+"/accounts/").then((function(e){E(e.data)})).catch((function(e){alert("Error:"+e)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t={}).transactiondate=document.getElementById("dateval").value,t.amount=document.getElementById("amount").value,t.categorytype=document.getElementById("categorytype").value,t.categoryname=document.getElementById("categoryname").value,t.note=document.getElementById("note").value,t.fromacc=document.getElementById("fromacc").value,t.toacc=document.getElementById("toacc").value,t.transactiondate){e.next=11;break}return alert("Transaction date must be present!"),e.abrupt("return");case 11:if(t.fromacc!==t.toacc){e.next=14;break}return alert("From and To A/C cannot be same!"),e.abrupt("return");case 14:u.a.post(h+"/transaction/add",t).then((function(e){alert("Transaction Added!"),A()})).catch((function(e){alert("Error:"+e)}));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Expense Manager"}),!c&&Object(b.jsx)("button",{onClick:function(){return t()},children:"Log In"}),c&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:{textAlign:"left"},children:[Object(b.jsx)("h3",{children:"Add New Transaction"}),Object(b.jsxs)("p",{children:["Date: ",Object(b.jsx)("input",{id:"dateval",type:"date"})]}),Object(b.jsxs)("p",{children:["Amount: ",Object(b.jsx)("input",{id:"amount",type:"text"})]}),Object(b.jsxs)("p",{children:["Category Type:",Object(b.jsxs)("select",{id:"categorytype",children:[Object(b.jsx)("option",{children:"Expense"}),Object(b.jsx)("option",{children:"Income"}),Object(b.jsx)("option",{children:"Transfer"}),Object(b.jsx)("option",{children:"Adjustment"})]})]}),Object(b.jsxs)("p",{children:["Category Name: ",Object(b.jsx)("input",{id:"categoryname",type:"text"})]}),Object(b.jsxs)("p",{children:["Note: ",Object(b.jsx)("input",{id:"note",type:"text"})]}),Object(b.jsxs)("p",{children:["From A/C:",Object(b.jsxs)("select",{id:"fromacc",children:[g.map((function(e,t){return Object(b.jsx)("option",{value:e.account_id,children:e.accountname},t)})),Object(b.jsx)("option",{value:"0",children:"External"})]})]}),Object(b.jsxs)("p",{children:["To A/C:",Object(b.jsxs)("select",{id:"toacc",children:[g.map((function(e,t){return Object(b.jsx)("option",{value:e.account_id,children:e.accountname},t)})),Object(b.jsx)("option",{value:"0",children:"External"})]})]}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{onClick:I,children:"Add"})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{accounts:g}),Object(b.jsx)("p",{children:Object(b.jsx)("button",{onClick:A,children:"Filter"})}),Object(b.jsxs)("p",{children:[Object(b.jsx)("h3",{children:"Transactions List"}),Object(b.jsx)("p",{children:g.map((function(e,t){return Object(b.jsxs)("p",{children:[Object(b.jsxs)("b",{children:[e.accountname," Balance: "]})," \u20b9",parseFloat(e.balance).toFixed(2)]},t)}))}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Total Amount: "})," \u20b9",parseFloat(m).toFixed(2)]}),Object(b.jsxs)("table",{style:{backgroundColor:"#fffeed"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Date"}),Object(b.jsx)("th",{children:"Category Type"}),Object(b.jsx)("th",{children:"Category Name"}),Object(b.jsx)("th",{children:"Note"}),Object(b.jsx)("th",{children:"Amount"})]})}),Object(b.jsx)("tbody",{children:i.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{style:"Expense"===e.categorytype?{backgroundColor:"#f5a698"}:"Transfer"===e.categorytype?{backgroundColor:"#e6e9fc"}:{backgroundColor:"#b8f2c2"},children:e.categorytype}),Object(b.jsx)("td",{children:e.categoryname}),Object(b.jsx)("td",{children:e.note}),Object(b.jsxs)("td",{children:["\u20b9",e.amount]})]})}))})]})]})]})]})]})}var O=document.getElementById("root");r.a.render(Object(b.jsxs)(n.StrictMode,{children:[Object(b.jsx)(o.a,{domain:"dev-jpr60ht5.us.auth0.com",clientId:"s0OzlM1MElFjdjtNgq8fwVBsD2Ko3jiG",redirectUri:window.location.origin,children:Object(b.jsx)(p,{})}),Object(b.jsx)(p,{})]}),O)}},[[50,1,2]]]);
//# sourceMappingURL=main.2453b0f6.chunk.js.map