import React, { useState } from 'react'
import RadioGroup from './RadioGroup';


function ButtonGroupLabels({ onSelectedOptionChange }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
        onSelectedOptionChange(event.target.value);
        };

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
    
  return (
    <div>ButtonGroupLabels
    <h5>New to SCC?</h5>
    <RadioGroup
        name="group1"
        options={group1Options}
        inline
        handleRadioChange={handleRadioChange}
        selectedOption={selectedOption}
    />
    <h5>Question for SCC employees only - driving for position?</h5>
    <RadioGroup
        name="group1"
        options={group2Options}
        inline
        handleRadioChange={handleRadioChange}
        selectedOption={selectedOption}
    />
    <h5>Will employee be transporting children?</h5>
    <RadioGroup
        name="group1"
        options={group3Options}
        inline
        handleRadioChange={handleRadioChange}
        selectedOption={selectedOption}
    />
    <h5>Attending PreService?</h5>
    <RadioGroup
        name="group1"
        options={group4Options}
        inline
        handleRadioChange={handleRadioChange}
        selectedOption={selectedOption}
    />
    </div>
  )
}

export default ButtonGroupLabels