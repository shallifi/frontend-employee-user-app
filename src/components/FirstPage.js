
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarWidget from './CalendarWidget';
import ButtonGroupLabels from './ButtonGroupLabels';
import useForm from '../hooks/useForm';
import DropDownGroup from './DropDownGroup';
import InputFieldGroup from './InputFieldGroup';


function FirstPage({ selectedDate}) {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const { formData, setFormData, handleChange } = useForm({
  date: null,
});
  const [extension, setExtension] = useState('');

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

  const handleExtensionChange = (event) => {
    const { value} = event.target;
    if (value === "" || /^\d+$/.test(value)) {
      if (value.length <= 4) {
        setExtension(value);
      }
    }
  };


/////////////////////////////////////////////////////////////////////////////////////
  // handles the radio button group /////////////////////////////////////////////
const handleSelectedOptionChange = (value, groupName) => { // value is the value of the selected radio button
  setSelectedOption((prevSelectedOption) => ({
    ...prevSelectedOption,
    [groupName]: value,
  }));
}; 



/////////////////////////////////////////////////////////////////////////////////////
  // handles the calendar widget /////////////////////////////////////////////
const handleCalendarChange = (date) => {
  handleChange({
    target: {
      name: 'date',
      value: date,
  },
  });
};
/////////////////////////////////////////////////////////////////////////////////////
  // handles the drop down group /////////////////////////////////////////////
const handleDropDownChange = (selectedAgency) => {
  // console.log(`handleDropDownChange`, selectedAgency);
  setSelectedAgency(selectedAgency);
};
/////////////////////////////////////////////////////////////////////////////////////
  // handles the department in drop down group /////////////////////////////////////////////
const handleDepartmentChange = (selectedDepartment) => {
  // console.log(`handleDepartmentChange`, selectedDepartment);
  setSelectedDepartment(selectedDepartment);
};

/////////////////////////////////////////////////////////////////////////////////////
  // handles the office in drop down group ///////////////////////////////////
const handleOfficeChange = (formData) => {
  // console.log(`handleOfficeChange`, formData);
  setFormData(formData);
};




/////////////////////////////////////////////////////////////////////////////////////
  // handles the submit button /////////////////////////////////////////////
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
      agency_id: selectedAgency ? selectedAgency.value : null,
      department_id: selectedDepartment ? selectedDepartment.value : null,
      office_id: formData ? formData.value : null,
      extension: extension,

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
    setSelectedAgency(null);
    setSelectedDepartment(null);
    setFormData(null);
    setExtension('');
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
    <DropDownGroup onSelectedAgencyChange={handleDropDownChange} onSelectedDepartmentChange={handleDepartmentChange} onSelectedOfficeChange={handleOfficeChange} />
      <br></br>
    <CalendarWidget onDateChange={handleCalendarChange} />
    <br></br>
    <InputFieldGroup 
    onSelectedExtensionChange={handleExtensionChange} 
    extension={extension} 
    setExtension={setExtension}
    onAdditionalInfoChange/>
    <br></br>
    <ButtonGroupLabels onSelectedOptionChange={handleSelectedOptionChange} selectedOption={selectedOption} /> 
    <br/>
      <input type="submit" value="Submit" />
      <br/>
    </form>


     </div>
  );

}

export default FirstPage