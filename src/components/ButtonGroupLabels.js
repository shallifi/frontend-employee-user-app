import React, { useState } from 'react'
import RadioGroup from './RadioGroup';


function ButtonGroupLabels({ onSelectedOptionChange, handleIsSupervisorRadioChange, isSupervisor }) {
    const [selectedOption, setSelectedOption] = useState({});
    

    const handleRadioChange = (event, groupName) => {
        // console.log('handleRadioChange', event.target.value, groupName);

        setSelectedOption((prevSelectedOption) => ({ // this is the value of the selected radio button
            ...prevSelectedOption, 
            [groupName]: event.target.value,  
        }));
        onSelectedOptionChange(event.target.value, groupName);       
        };
        
// const handleSupervisorChange = (event) => {
//     console.log('handleSupervisorChange', event.target.value);
//     setIsSupervisor(event.target.value === 'Yes');};


    const group1Options = [
        { id: 'inline-radio-1', label: 'New' },
        { id: 'inline-radio-2', label: 'Returning' },
        { id: 'inline-radio-3', label: 'Not Applicable' },
        ];
    const group2Options = [
          { id: 'inline-radio-4', label: 'Yes' },
          { id: 'inline-radio-5', label: 'No' },
          { id: 'inline-radio-6', label: 'Not Applicable' },
          ];
    const group3Options = [
          { id: 'inline-radio-7', label: 'Yes' },
          { id: 'inline-radio-8', label: 'No' },
          { id: 'inline-radio-9', label: 'Not Applicable' },
          ];
    const group4Options = [
          { id: 'inline-radio-10', label: 'Yes' },
          { id: 'inline-radio-12', label: 'Already has Certificate' },
          { id: 'inline-radio-13', label: 'Needs Waiver Test' },
          { id: 'inline-radio-14', label: 'Not Applicable' },
          ];   
    const group5Options = [
            { id: 'inline-radio-15', label: 'Yes' },
            { id: 'inline-radio-16', label: 'No' },
    ]; 
    
  return (
    <div>ButtonGroupLabels

    <h5>Is employee going to be a Supervisor?</h5>
    <RadioGroup
        name="group5"
        options={group5Options}
        inline
        // handleRadioChange={(event) => handleIsSupervisorRadioChange(event, 'group5')}
        // selectedOption={selectedOption['group5'] === true ? 'Yes' : 'No' }    
        handleRadioChange={handleIsSupervisorRadioChange}
        selectedOption={isSupervisor ? 'Yes' : 'No' }
        />

    <h5>New to SCC/CBC project?</h5>
    <RadioGroup
        name="group1"
        options={group1Options}
        inline
        handleRadioChange={(event) => handleRadioChange(event, 'group1')}
        selectedOption={selectedOption['group1']}
    />
    <h5>Question for SCC employees only - driving for position?</h5>
    <RadioGroup
        name="group2"
        options={group2Options}
        inline
        handleRadioChange={(event) => handleRadioChange(event, 'group2')}
        selectedOption={selectedOption['group2']}
    />
    <h5>Will employee be transporting children?</h5>
    <RadioGroup
        name="group3"
        options={group3Options}
        inline
        handleRadioChange={(event) => handleRadioChange(event, 'group3')}
        selectedOption={selectedOption['group3']}
    />
    <h5>Attending PreService?</h5>
    <RadioGroup
        name="group4"
        options={group4Options}
        inline
        handleRadioChange={(event) => handleRadioChange(event, 'group4')} // this is the value of the selected radio button
        selectedOption={selectedOption['group4']} // this is the value of the selected radio button
    />
    </div>
  )
}

export default ButtonGroupLabels