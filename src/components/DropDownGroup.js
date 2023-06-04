import React from 'react'
// import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { useState } from 'react';

function DropDownGroup() {
    const [selectedAgency, setSelectedAgency] = useState(null);
    const loadAgencyOptions = async (inputValue, callback) => {
        console.log(`loadAgencyOptions`, inputValue);
        try{
            const response = await fetch(`http://localhost:3000/agency/index`);
            const json = await response.json();
            
            const options = json.map((agency) => ({
                value: agency.id,
                label: agency.agency_name,
            }));
            
            callback(options);
        } catch (error) {
            console.error('Error fetching agency options:', error);
        }
    };
    
    const handleChange = (selectedOption) => {
        console.log(`handleChange`, selectedOption); 
        
    };
    // const options = [
        //     { value: 'scc', label: 'SCC - Safe Children Coalition' },
        //     { value: 'flc', label: 'FLC - The Florida Center' },
        //     { value: 'lsf', label: 'LSF - Lutheran Services Florida' },
        //     { value: 'other', label: 'Other' }
        //     ];
    
    // const loadAgencyOptions = async (inputValue, callback) => {
    //     try {
    //         const response = await fetch('http://localhost:3000/agency?search=' + inputValue);
    //         const data = await response.json();
        
    //         const options = data.map((agency) => ({
    //         value: agency.id,
    //         label: agency.name,
    //         }));
        
    //         callback(options);
    //     } catch (error) {
    //         console.error('Error fetching agency options:', error);
    //     }
      
          
        


  return (
    <div>DropDownGroup Section
        <br></br>
        <h5>Agency</h5>
    {/* <Select options={options} onChange={handleChange}/> */}
    <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadAgencyOptions}
        onChange={(option) => setSelectedAgency(option)}
        value={selectedAgency}
        />
    {/* <AsyncSelect loadOptions={loadOptions} onChange={handleChange}/> */}
      </div>
  )
}

export default DropDownGroup