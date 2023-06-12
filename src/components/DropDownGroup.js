import React, { useEffect, useState} from 'react'
import AsyncSelect from 'react-select/async';
import useForm from '../hooks/useForm';



function DropDownGroup({onSelectedAgencyChange, onSelectedDepartmentChange, onSelectedOfficeChange}) {
   const [agencyOptions, setAgencyOptions] = useState([]);
   const [departmentOptions, setDepartmentOptions] = useState([]);
   const [selectedAgency, setSelectedAgency] = useState(null);
   const { formData, setFormData, handleChange } = useForm({
    date: null,
    });

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
            // console.log(`loadA`, options);
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
        //    loaded only when an agency is selected and only the departments for that agency are loaded
            const response = await fetch(
                `http://localhost:3000/departments/agency/${selectedAgency.value}`
              );
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


    // this is the function that is called when the user types in the office box
    const loadOfficeOptions = async (searchValue, callback) => {
        console.log('loadOfficeOptions', searchValue);
        try{
            const response = await fetch(`http://localhost:3000/offices`);
            const json = await response.json();

            let options = json.map((office) => ({
                value: office.id,
                label: office.office_name,
            })
            );

            if (searchValue) {
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }

            callback(options);
            console.log(`loadO`, options);
        } catch (error) {
            console.error('Error fetching office options:', error);
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


    const handleOfficeChange = (selectedOption) => {
    onSelectedOfficeChange(selectedOption); // Pass the selected office object
    };

    //   this is the function that is called before the user types in the search box, to show the default options
    useEffect(() => {
        loadAgencyOptions('', (options) => {
            setAgencyOptions(options);
    });
     loadOfficeOptions('', (options) => {
            setFormData(options);
    });
     
    }, []);

    //  this is the function that is called before the user types in the department box, to show the default options

    useEffect(() => {
        if (!selectedAgency) {
            return;
        }
        loadDepartmentOptions('', (options) => {
            setDepartmentOptions(options);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAgency]);


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

        <br/>
    <h5>Office Location</h5>
    <AsyncSelect
        cacheOptions
        defaultOptions={formData}
        loadOptions={loadOfficeOptions}
        onChange={handleOfficeChange}
        isClearable

    />
      </div>
  )
}

export default DropDownGroup