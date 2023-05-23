import React from 'react';
import Form from 'react-bootstrap/Form';

function RadioGroup({ name, options, inline, onChange }) {
  return (
    <div className="mb-3">
      {options.map((option) => (
        <Form.Check
          key={option.id}
          inline={inline}
          label={option.label}
          name={name}
          type="radio"
          id={option.id}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
export default RadioGroup;