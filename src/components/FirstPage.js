import React from 'react'
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FirstPage() {
  return (
    <div className="App">
    <form>
          
        First Name:
        <input type="text" name="name" />
        Last Name:
        <input type="text" name="name" />
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