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
    <form onSubmit={e => { e.preventDefault(); props.handelOnsubmit(e); }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
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
  const listtorender= props.listphone.map(
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
