

import React from 'react';

function RadioGroup({ name, options, handleRadioChange, selectedOption }) {
  return (
    <div className='radio-group'>
      {options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            name={name}
            id={option.id}
            value={option.label}
            onChange={handleRadioChange}
            checked={selectedOption === option.label}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
