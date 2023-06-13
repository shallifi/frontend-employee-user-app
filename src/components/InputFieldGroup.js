import React, { useState } from 'react'


function InputFieldGroup( {onSelectedExtensionChange, extension, setExtension}) {
    const handleExtensionChange = (event) => {
        const { value } = event.target;
        if (value === "" || /^\d+$/.test(value)) {
            if (value.length <= 4) {
                setExtension(value);
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