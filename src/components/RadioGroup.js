// import Form from 'react-bootstrap/Form';
// import useForm from '../hooks/useForm';


import React from 'react';

function RadioGroup({ name, options, handleRadioChange, selectedOption }) {
  return (
    <div>
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
