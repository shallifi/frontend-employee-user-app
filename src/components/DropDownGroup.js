import React, { useEffect, useState} from 'react'
import AsyncSelect from 'react-select/async';
import useForm from '../hooks/useForm';



function DropDownGroup({onSelectedAgencyChange, onSelectedDepartmentChange, onSelectedOfficeChange, onSelectedNeedsChange, onSelectedTitleChange, onSelectedSupervisorChange, setSelectedSupervisor, selectedSupervisor}) {
   const [agencyOptions, setAgencyOptions] = useState([]);
   const [departmentOptions, setDepartmentOptions] = useState([]);
   const [titleOptions, setTitleOptions] = useState([]);
   const [supervisorOptions, setSupervisorOptions] = useState([]);
   const [selectedAgency, setSelectedAgency] = useState(null);
   const [selectedNeeds, setSelectedNeeds] = useState([]);
   const [selectedTitle, setSelectedTitle] = useState([]);
   const { formData, setFormData } = useForm({
    date: null,
    });
    const [needsOptions, setNeedsOptions] = useState([]);

    ////////////////////////////////////////////////////////////////////////////
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
            // console.log(`loadD`, options);
        } catch (error) {
            console.error('Error fetching department options:', error);
        }
    };


    // this is the function that is called when the user types in the office box
    const loadOfficeOptions = async (searchValue, callback) => {
        // console.log('loadOfficeOptions', searchValue);
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
            // console.log(`loadO`, options);
        } catch (error) {
            console.error('Error fetching office options:', error);
        }
    };

    const loadNeedsOptions = async (searchValue, callback) => {
        // console.log('loadNeedsOptions', searchValue);
        try{
            const response = await fetch(`http://localhost:3000/needs`);
            const json = await response.json();

            let options = json.map((need) => ({
                value: need.id,
                label: need.need_name,
            })
            );

            if (searchValue) {
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }

            callback(options);
            // console.log(`loadNeeds`, options);
        } catch (error) {
            console.error('Error fetching office options:', error);
        }
    };

    const loadTitleOptions = async (searchValue, callback) => {
        // console.log('loadTitleOptions in DD group', searchValue);
        try{
            const response = await fetch(`http://localhost:3000/titles`);
            const json = await response.json();

            let options = json.map((title) => ({
                value: title.id,
                label: title.title_name,
            })
            );

            if (searchValue) {
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }

            callback(options);
            // console.log(`loadTitle after mapping`, options);
        } catch (error) {
            console.error('Error fetching title options:', error);
        }
    };

    const loadSupervisorOptions = async (searchValue, callback) => {
        console.log('loadSupervisorOptions in DD group', searchValue);
        try{
            const response = await fetch(`http://localhost:3000/employees`);
            const json = await response.json();

            let options = json.map((employee) => ({
                value: employee.id,
                label: employee.first_name + ' ' + employee.last_name,
            })
            );

            if (searchValue) {
                options = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));
            }

            callback(options);
            console.log(`loadSupervisor after mapping`, options);
        } catch (error) {
            console.error('Error fetching title options:', error);
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
        // console.log('handleOfficeChange', selectedOption);
    onSelectedOfficeChange(selectedOption); // Pass the selected office object
    };


    const handleSupervisorChange = (selectedOption) => {
        // console.log('handleSupervisorChange', selectedOption);
    onSelectedSupervisorChange(selectedOption); // Pass the selected supervisor object
    };

    const handleTitleChange = (selectedOption) => {
        console.log('handleTitleChange in DD group', selectedOption);
        setSelectedTitle(selectedOption);
        onSelectedTitleChange(selectedOption);
    // onSelectedTitleChange(selectedOption); // Pass the selected title object
    };
   
    const handleMultiSelectChange = (selectedOption) => {
        // console.log('handleMutliSelectChange', selectedOption);
        setSelectedNeeds(selectedOption);
    onSelectedNeedsChange(selectedOption); // Pass the selected needs
    };

    //   this is the function that is called before the user types in the search box, to show the default options
    useEffect(() => {
        loadAgencyOptions('', (options) => {
            setAgencyOptions(options);
    });
        loadOfficeOptions('', (options) => {
                setFormData(options);
    });
        loadNeedsOptions('', (options) => {
            setNeedsOptions(options);
    });
        loadTitleOptions('', (options) => {
            setTitleOptions(options);
    });
        loadSupervisorOptions('', (options) => {
            setSupervisorOptions(options);
    });

     // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div>
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
        <br/>
    <h5>Title / Position </h5>
    <AsyncSelect
        cacheOptions
        defaultOptions={titleOptions}
        loadOptions={loadTitleOptions}
        onChange={handleTitleChange}
        value={selectedTitle}
        isClearable
    
    />

        <br/>
    <h5>Supervisor</h5>
    <AsyncSelect
        cacheOptions
        defaultOptions={supervisorOptions}
        loadOptions={loadSupervisorOptions}
        onChange={handleSupervisorChange}
        // value={selectedSupervisor}
        isClearable
    />

        <br/>

    <h5>NEEDS</h5>
    <AsyncSelect
        cacheOptions
        defaultOptions={needsOptions}
        loadOptions={loadNeedsOptions}
        onChange={handleMultiSelectChange}
        value={selectedNeeds}
        isClearable
        isMulti

    />


      </div>
  )
}

export default DropDownGroup