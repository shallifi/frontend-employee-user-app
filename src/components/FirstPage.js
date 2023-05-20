import React from 'react'
import {useState, useHistory} from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarWidget from './CalendarWidget';
import ButtonTest from './ButtonTest';
// import utilityFunctions from '../utilityFunctions';
// import useForm from '../hooks/useForm';

// import { json } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FirstPage() {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
 const navigate = useNavigate();



  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    if (name === 'first_name') {
      setFirstName(value);
    } else if (name === 'last_name') {
      setLastName(value);
    }

  }


  function handleSubmit(event) {
    event.preventDefault();
    const data = { first_name: firstName, last_name: lastName };
   
    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => { console.log('Success:', data); 
    setFirstName('');
    setLastName('');
    navigate('/second-page');
  })
    .catch((error) => { console.error('Error:', error);
    });
  
  }


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <h1>Employee Information</h1>
    
    <label>
        First name:
        <input type="text"
        name="first_name"        
        onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input type="text" 
        name="last_name"        
        onChange={handleChange} />
      </label>
    <ButtonTest/>
    <CalendarWidget/>


{/* 
        First Name:
        <input type="text"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        /> */}
        {/* Last Name:
        <input type="text" 
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        /> */}
        
        <div className='radiobutton'>
         
          {/* New to SCC?
         
            <input type="radio" value="option1" checked={true} />
            New to SCC/CBC project
                      
            <input type="radio" value="option2" />
            Returning to SCC/CBC project
                      
            <input type="radio" value="option3" />
            Not Applicable */}
          </div>
          
              
      <input type="submit" value="Submit" />
</form>

      
        {/* <Route exact path="/FirstPage">
            <FirstPage />
        </Route>
       */}
     </div>
  );

}

export default FirstPage