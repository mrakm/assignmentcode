/*
We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm(props) {


  return (
    <form onSubmit={e => { e.preventDefault(); props.handelOnsubmit(e);  
       e.target.userFirstname.value="";
       e.target.userLastname.value="";
       e.target.userPhone.value="";
       
       }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        defaultValue="Coder"
        required 
        
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
         defaultValue="Byte" 
        required 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
         defaultValue="8885559999"
        required 
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  const listtorender= props.listphone.sort(function(a,b){
    if(a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1;
    if(a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1;
    return 0;

  }).map(
    (phone,index)=>
        <tr key={index}>
          <th style={style.tableCell}>{phone.firstname}</th>
          <th style={style.tableCell}>{phone.lastname}</th>
          <th style={style.tableCell}>{phone.phonenumber}</th>
        </tr>);   

  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {listtorender}
      </thead> 
    </table>
  );
}

function Application(props) {

  const [phonebook,setPhonebook]=useState([]);
  const handelSubmit=(e)=>{
     const firstname=e.target.userFirstname.value;
     const lastname=e.target.userLastname.value;
     const phonenumber=e.target.userPhone.value;
     setPhonebook([...phonebook,{
       firstname:firstname,
       lastname:lastname,
       phonenumber:phonenumber

     }]);
       
    
    
  }
  return (
    <section>
      <PhoneBookForm handelOnsubmit={(e)=>handelSubmit(e)}/>
      <InformationTable listphone={phonebook} />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
