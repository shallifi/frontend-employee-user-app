
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CalendarWidget from './CalendarWidget';
import ButtonGroupLabels from './ButtonGroupLabels';
import useForm from '../hooks/useForm';
import DropDownGroup from './DropDownGroup';
import InputFieldGroup from './InputFieldGroup';
import BadgePhotoGroup from './BadgePhotoGroup';


function FirstPage({ selectedDate }) {
  const [firstName, setFirstName] = useState ('');
  const [lastName, setLastName] = useState ('');
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  // const [selectedPhoto, setSelectedPhoto] = useState('');
  const [badgePhoto, setBadgePhoto] = useState(null);
  const { formData, setFormData, handleChange } = useForm({
  date: null,
});
  const [extension, setExtension] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedNeeds, setselectedNeeds] = useState([]);

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
  // handles the photo upload /////////////////////////////////////////////
//   const handlePhotoChange = (event) => {
//     console.log(event.target.files);
//     // setSelectedPhoto(event.target.files[0]);
//     const file = event.target.files[0];
//     setSelectedPhoto(file);

//     const reader = new FileReader();
//     reader.onloadend = () => {
//         setPhotoPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
// };
const handleBadgePhotoChange = (file) => {
  console.log('handleBadgePhotoChange',file);
  setBadgePhoto(file);
};


  /////////////////////////////////////////////////////////////////////////////
  // handles the additional info text area /////////////////////////////////////////////
 const handleAdditionalInfoChange = (value) => {
    setAdditionalInfo(value);
    // console.log('handleAdd on Input component First page',value);
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

  // handles the department in drop down group /////////////////////////////////////////////
const handleDepartmentChange = (selectedDepartment) => {
  // console.log(`handleDepartmentChange`, selectedDepartment);
  setSelectedDepartment(selectedDepartment);
};


  // handles the office in drop down group ///////////////////////////////////
const handleOfficeChange = (formData) => {
  // console.log(`handleOfficeChange`, formData);
  setFormData(formData);
};

  // handles the needs in drop down group ///////////////////////////////////
const handleSelectedNeedsChange = (selectedNeeds) => {
console.log(`handleSelectedNeedsChange on fp`, selectedNeeds);
  setselectedNeeds(selectedNeeds);
};


const handleTitleChange = (selectedTitle) => { 
  console.log(`handleSelectTitleChange on FP`, selectedTitle);
  setSelectedTitle(selectedTitle);
};




/////////////////////////////////////////////////////////////////////////////////////
  // handles the submit button /////////////////////////////////////////////
  function handleSubmit(event) {
    event.preventDefault();
    const formDataBig = new FormData();
    const employeeData = { 
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
      title_id: selectedTitle ? selectedTitle.value : null,
      extension: extension,
      // badge_photo: badgePhoto,
      additional_info: additionalInfo,
      need_ids: selectedNeeds.map((option) => option.value), // this is an array of need ids
 
     };

    formDataBig.append('employee', JSON.stringify(employeeData));
     formDataBig.append('badge_photo', badgePhoto);


    // formDataBig.append('first_name', firstName);
    // formDataBig.append('last_name', lastName);
    // formDataBig.append('new_to_scc', selectedOption['group1']);
    // formDataBig.append('driving_for_position', selectedOption['group2']);
    // formDataBig.append('transporting_children', selectedOption['group3']);
    // formDataBig.append('attending_preservice', selectedOption['group4']);
    // formDataBig.append('start_date', formData.date);
    // formDataBig.append('agency_id', selectedAgency ? selectedAgency.value : null);
    // formDataBig.append('department_id', selectedDepartment ? selectedDepartment.value : null);
    // formDataBig.append('office_id', formData ? formData.value : null);
    // formDataBig.append('title_id', selectedTitle ? selectedTitle.value : null);
    // formDataBig.append('extension', extension);
    // formDataBig.append('badge_photo', badgePhoto);
    // formDataBig.append('additional_info', additionalInfo);
    // formDataBig.append('need_ids', selectedNeeds.map((option) => option.value)); // this is an array of need ids




    //  console.log('need_ids before submit', data.need_ids)
     console.log('need_ids before submit', formDataBig.badgePhoto)
   
    fetch('http://localhost:3000/employees', {
      method: 'POST',
      // headers: {"Content-Type": "application/json"},
      // body: JSON.stringify(formDataBig),
      body: formDataBig,
      // body: formDataBig,
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => { 
      console.log('Success:', data)
      // console.log('Success:', data.need_ids);
    setFirstName('');
    setLastName('');
    setSelectedAgency(null);
    setSelectedDepartment(null);
    setFormData({});
    setSelectedTitle(null);
    setExtension('');
    setBadgePhoto('');
    setAdditionalInfo('');
    setselectedNeeds([]); 
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
    <DropDownGroup 
     onSelectedAgencyChange={handleDropDownChange} 
     onSelectedDepartmentChange={handleDepartmentChange}
     onSelectedOfficeChange={handleOfficeChange}
     onSelectedNeedsChange={handleSelectedNeedsChange}
     onSelectedTitleChange={handleTitleChange} />
      <br></br>
    <CalendarWidget onDateChange={handleCalendarChange} />
    <br></br>
    <BadgePhotoGroup 
      photo={badgePhoto} handleBadgePhotoChange={handleBadgePhotoChange}
    />
    <br></br>
    <InputFieldGroup 
    onSelectedExtensionChange={handleExtensionChange} 
    extension={extension} 
    setExtension={setExtension}
    additionalInfo={additionalInfo}
    onAdditionalInfoChange={handleAdditionalInfoChange}
     />
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