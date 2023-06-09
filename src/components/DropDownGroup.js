import React, { useEffect, useState} from 'react'
import AsyncSelect from 'react-select/async';



function DropDownGroup({onSelectedAgencyChange, onSelectedDepartmentChange}) {
   const [defaultOptions, setDefaultOptions] = useState([]);

    // this is the function that is called when the user types in the search box
    const loadAgencyOptions = async (searchValue, callback) => {
        // console.log(`loadAgencyOptions`, searchValue);
        try{
   
            const response = await fetch(`http://localhost:3000/agencies`);
            const json = await response.json();
            
            let options = json.map((agency) => ({
                value: agency.id,
                label: agency.agency_name,
            })
            );

            if (searchValue) {
                // const searchRegex = new RegExp(searchValue, 'i');
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }
               
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

    //   this is the function that is called before the user types in the search box, to show the default options
      useEffect(() => {
            loadAgencyOptions('', (options) => {
            setDefaultOptions(options);
        });
        }, []);


  return (
    <div>DropDownGroup Section
        <br></br>
        <h5>Agency</h5>
   
    <AsyncSelect
        cacheOptions
        defaultOptions={defaultOptions} 
        loadOptions={loadAgencyOptions}
        onChange={handleAgencyChange}
        isClearable
        />
        <br/>
        <h5>Department</h5>
    <AsyncSelect
        cacheOptions


    />
      </div>
  )
}

export default DropDownGroup