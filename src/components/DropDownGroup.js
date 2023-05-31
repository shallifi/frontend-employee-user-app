import React from 'react'
import Select from 'react-select';

function DropDownGroup() {
    const options = [
        { value: 'scc', label: 'SCC - Safe Children Coalition' },
        { value: 'flc', label: 'FLC - The Florida Center' },
        { value: 'lsf', label: 'LSF - Lutheran Services Florida' },
        { value: 'other', label: 'Other' }
        ];
    const handleChange = (selectedOption) => {
        console.log(`handleChange`, selectedOption); 
        
        };

  return (
    <div>DropDownGroup Section
        <br></br>
        <h5>Agency</h5>
    <Select options={options} onChange={handleChange}/>
      </div>
  )
}

export default DropDownGroup