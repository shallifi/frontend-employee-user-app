import React, {  } from 'react'


function InputFieldGroup( {onSelectedExtensionChange, extension, setExtension, onAdditionalInfoChange}) {
    const handleExtensionChange = (event) => {
        const { value } = event.target;
        if (value === "" || /^\d+$/.test(value)) { // if value is empty or is a number
            if (value.length <= 4) { // if value is less than or equal to 4 characters
                setExtension(value);
            }
        }
    };

    const handleAddionalInfoChange = (event) => {
        const { value } = event.target;
        onAdditionalInfoChange(value);
    };

    

  return (
    <div>
        <h5>Input Field Group</h5>
        <h5>Extension</h5>
        <input
            type="text"
            name="extension"
            value={extension}
            onChange={handleExtensionChange}
            placeholder="four digit extension"
        />
        <br/>
        <h5>Additional Information</h5>
        <textarea
            type="text"
            name="additional_info"
            onChange={handleAddionalInfoChange}
            placeholder="additional information"
        />


        </div>
  )
}

export default InputFieldGroup