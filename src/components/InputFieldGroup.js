import React, {  } from 'react'


function InputFieldGroup( { onSelectedExtensionChange, extension, setExtension, onAdditionalInfoChange}) {


    const handleAdditionalInfoChange = (event) => {
        const value  = event.target.value;
        onAdditionalInfoChange(value);
        // console.log('handleAdd on Input component',value);
    };

    

  return (
    <div>
  

        <h5>Extension</h5>
        <input
            type="text"
            name="extension"
            value={extension}
            onChange={onSelectedExtensionChange}
            placeholder="four digit extension"
        />
        <br/>
        <br/>
        <h5>Additional Information</h5>
        <textarea
            type="text"
            name="additional_info"
            onChange={handleAdditionalInfoChange}
            placeholder="Enter additional information "
            style={{ height: 100, width: 300 }
            }
                  
        />


        </div>
  )
}

export default InputFieldGroup