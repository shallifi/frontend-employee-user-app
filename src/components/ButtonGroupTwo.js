import React from 'react'
import Form from 'react-bootstrap/Form'
import RadioGroup from './RadioGroup'
// import { useState } from "react";
import useForm from '../hooks/useForm';


function ButtonGroupTwo() {
    const { formData, setFormData } = useForm({
        group1Options: '',
        // group2: '',
        // group3: '',
        // group4: '',
    });
    const group1Options = [
        { id: 'inline-radio-1', label: 'New to SCC/CBC project' },
        { id: 'inline-radio-2', label: 'Returning to SCC/CBC project' },
        { id: 'inline-radio-3', label: 'Not Applicable' },
        ];
    const group2Options = [
        { id: 'inline-radio-1', label: 'Yes' },
        { id: 'inline-radio-2', label: 'No' },
        { id: 'inline-radio-3', label: 'Not Applicable' },
        ];
    const group3Options = [
        { id: 'inline-radio-1', label: 'Yes' },
        { id: 'inline-radio-2', label: 'No' },
        { id: 'inline-radio-3', label: 'Not Applicable' },
        ];
    const group4Options = [
        { id: 'inline-radio-1', label: 'Yes' },
        { id: 'inline-radio-2', label: 'Already has Certificate' },
        { id: 'inline-radio-3', label: 'Needs Waiver Test' },
        { id: 'inline-radio-4', label: 'Not Applicable' },
        ];
    // const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => { 
        setFormData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { group1: formData };

        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => { console.log('Success from BUTTON:', data);
        })
        
        
        console.log('testing option button in ButtonGroupTwo', formData);
    }


  return (
      <Form onSubmit={handleSubmit}>
        <h5>New to SCC?</h5>
        <RadioGroup name="group1" 
        options={group1Options} 
        inline
        onChange={handleRadioChange}
        />
        <h5>Question for SCC employees only - driving for position?</h5>
        <RadioGroup name="group2" options={group2Options} inline />
        <h5>Will employee be transporting children?</h5>
        <RadioGroup name="group3" options={group3Options} inline />
        <h5>Attending PreService?</h5>
        <RadioGroup name="group4" options={group4Options} inline />

      </Form>
  )
}

export default ButtonGroupTwo