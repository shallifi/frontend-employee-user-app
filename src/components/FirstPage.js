import React from 'react'
import {useState} from 'react';
// import utilityFunctions from '../utilityFunctions';
// import useForm from '../hooks/useForm';

// import { json } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FirstPage() {
  const [firstName, setFirstName] = useState ({
    first_name: ''
  });
  const [lastName, setLastName] = useState ({
    last_name: ''
  });


  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    setFirstName((firstName) => ({...firstName, [name]: value}));
    setLastName((lastName) => ({...lastName, [name]: value}));
  }

  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   console.log(name, value);
  //   if (name === 'firstName') {
  //     setFirstName(value);
  //   } else if (name === 'lastName') {
  //     setLastName(value);
  //   }
  // }


  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   console.log(name, value);
  //   setFirstName((firstName) => ({...firstName, [name]: value}));
  //   setLastName((lastName) => ({...lastName, [name]: value}));
  // }





// handleSubmit function is not working, cors, failed to fetch, need to fix the handleChange function. First name on change is happening but not staying on screen and not submitting to the database. how to integrate useform into this function?

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(`First name: ${firstName}`);
    // console.log(`Last name: ${lastName}`);
    const data = {firstName, lastName};
    console.log(data);

    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => { console.log('Success:', data); })
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
        name="firstName"         
        onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input type="text" 
        name="lastName"        
        onChange={handleChange} />
      </label>

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