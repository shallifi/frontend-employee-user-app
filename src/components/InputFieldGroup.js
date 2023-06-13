import React, { useState } from 'react'
// import useForm from '../hooks/useForm'



function InputFieldGroup({ onSelectedExtensionChange, extension }) {
    const handleExtensionChange = (event) => {
        const { value } = event.target;
        if (value === "" || /^\d+$/.test(value)) {
            if (value.length <= 4) {
                onSelectedExtensionChange(value);
            }
        }
    };

  return (
    <div>
        <h5>Input Field Group</h5>
        <input
            type="text"
            name="extension"
            value={extension}
            onChange={handleExtensionChange}
            placeholder="four digit extension"
        />


        </div>
  )
}

export default InputFieldGroup