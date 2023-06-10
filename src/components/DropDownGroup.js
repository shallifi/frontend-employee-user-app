import React, { useEffect, useState} from 'react'
import AsyncSelect from 'react-select/async';



function DropDownGroup({onSelectedAgencyChange, onSelectedDepartmentChange}) {
   const [agencyOptions, setAgencyOptions] = useState([]);
   const [departmentOptions, setDepartmentOptions] = useState([]);
   const [selectedAgency, setSelectedAgency] = useState(null);

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
    
    // this is the function that is called when the user types in the department box
    const loadDepartmentOptions = async (searchValue, callback) => {
        if (!selectedAgency) {
            callback([]);
            return;
        }
        console.log('loadDepartmentOptions', searchValue);
        try{
            const response = await fetch(`http://localhost:3000/departments`);
            // const response = await fetch(`http://localhost:3000/depart/${selectedAgency.value}/departments`);
            // const response = await fetch(
            //     `http://localhost:3000/agencies/${selectedAgency.value}/departments`
            //   );
            const json = await response.json();

            let options = json.map((department) => ({
                value: department.id,
                label: department.department_name,
            })
            );

            if (searchValue) {
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }
            
            callback(options);
            console.log(`loadD`, options);
        } catch (error) {
            console.error('Error fetching department options:', error);
        }
    };


// this is the function that is called when the user selects an option
    const handleAgencyChange = (selectedOption) => {
        setSelectedAgency(selectedOption);
        onSelectedAgencyChange(selectedOption); // Pass the selected agency object
    };  
      
    const handleDepartmentChange = (selectedOption) => {
    onSelectedDepartmentChange(selectedOption); // Pass the selected department object
    };

    //   this is the function that is called before the user types in the search box, to show the default options
      useEffect(() => {
            loadAgencyOptions('', (options) => {
                setAgencyOptions(options);
        });

        loadDepartmentOptions('', (options) => {
            setDepartmentOptions(options);
        });
        }, []);


  return (
    <div>DropDownGroup Section
        <br></br>
        <h5>Agency</h5>
   
    <AsyncSelect
        cacheOptions
        defaultOptions={agencyOptions} 
        loadOptions={loadAgencyOptions}
        onChange={handleAgencyChange}
        value={selectedAgency} // Set the selected agency
        isClearable
        />
        <br/>
        <h5>Department</h5>
    <AsyncSelect
        cacheOptions
        defaultOptions={departmentOptions}
        loadOptions={loadDepartmentOptions}
        onChange={handleDepartmentChange}
        
        isClearable
        isDisabled={!selectedAgency} // Disable the department dropdown until an agency is selected
    />
      </div>
  )
}

export default DropDownGroup