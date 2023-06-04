
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarWidget from './CalendarWidget';
import ButtonGroupLabels from './ButtonGroupLabels';
import useForm from '../hooks/useForm';
import DropDownGroup from './DropDownGroup';
// import Select from 'react-select';

function FirstPage({ selectedDate}) {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  // const [selectedAgency, setSelectedAgency] = useState(null);
const { formData, handleChange } = useForm({
  date: null,
});



/////////////////////////////////////////////////////////////////////////////////////
  // handles the text input fields /////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  const handleNameChange = (event) => {
    const {name, value} = event.target;
    if (name === 'first_name') {
      setFirstName(value);
    } else if (name === 'last_name') {
      setLastName(value);
    }
  }
/////////////////////////////////////////////////////////////////////////////////////
  // handles the radio button group /////////////////////////////////////////////
const handleSelectedOptionChange = (value, groupName) => { // value is the value of the selected radio button
  setSelectedOption((prevSelectedOption) => ({
    ...prevSelectedOption,
    [groupName]: value,
  }));
}; 
/////////////////////////////////////////////////////////////////////////////////////
const handleCalendarChange = (date) => {
  handleChange({
    target: {
      name: 'date',
      value: date,
  },
  });
};




  // const handleSelectedOptionChange = (value) => {
  //   setSelectedOption(value);
  //    }

  // const handleFormChange = (event) => {
  //   setFormData(event.target.value);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    const data = { 
      first_name: firstName,
      last_name: lastName,
      new_to_scc: selectedOption['group1'], 
      driving_for_position: selectedOption['group2'],
      transporting_children: selectedOption['group3'],
      attending_preservice: selectedOption['group4'],
      start_date: formData.date,
      agency_id: agency.id
     };
   
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
        onChange={handleNameChange} />
      </label>
      <label>
        Last name:
        <input type="text" 
        name="last_name"        
        onChange={handleNameChange} />
      </label>
      <br></br>
      <br></br>
    <DropDownGroup />
      <br></br>
    <CalendarWidget onDateChange={handleCalendarChange} />
    <br></br>
    {/* <ButtonGroupTwo onChange={handleFormChange} selectedOption={selectedOption} setFormData={setSelectedOption} /> */}
    <ButtonGroupLabels onSelectedOptionChange={handleSelectedOptionChange} selectedOption={selectedOption} /> 
              
      <input type="submit" value="Submit" />
    </form>


     </div>
  );

}

export default FirstPage