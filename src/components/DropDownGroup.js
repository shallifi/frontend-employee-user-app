import React from 'react'
import AsyncSelect from 'react-select/async';


function DropDownGroup({onSelectedAgencyChange}) {
   

    // this is the function that is called when the user types in the search box
    const loadAgencyOptions = async (inputValue, callback) => {
        console.log(`loadAgencyOptions`, inputValue);
        try{
            const response = await fetch(`http://localhost:3000/agency/index`);
            const json = await response.json();
            
            const options = json.map((agency) => ({
                value: agency.id,
                label: agency.agency_name,
            })
            );
               
            callback(options);
            console.log(`loadA`, options);
        } catch (error) {
            console.error('Error fetching agency options:', error);
        }
    };
    
// this is the function that is called when the user selects an option
    const handleAgencyChange = (selectedOption) => {
        onSelectedAgencyChange(selectedOption); // Pass the selected agency object
      };  


  return (
    <div>DropDownGroup Section
        <br></br>
        <h5>Agency</h5>
   
    <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadAgencyOptions}
        onChange={handleAgencyChange}
        isClearable
        />
      </div>
  )
}

export default DropDownGroup