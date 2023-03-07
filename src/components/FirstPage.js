import React from 'react'
import {useState} from 'react';
// import { json } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FirstPage() {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    const data = {firstName, lastName};
    console.log(data);

    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => { console.log('Success:', data); })
    .catch((error) => { console.error('Error:', error);
    });

  }


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <label>
        First name:
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
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