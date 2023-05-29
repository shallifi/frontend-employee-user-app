// // import { useState } from "react";
// import useForm from '../hooks/useForm';
// // import Form from 'react-bootstrap/Form'
// import React from 'react'
// // import RadioGroup from './RadioGroup'


// function ButtonGroupTwo({ selectedOption,}) {
    
//     const { formData, setFormData } = useForm({ selectedOption: '' });

//     const group1Options = [
//         { id: 'inline-radio-1', label: 'New to SCC/CBC project' },
//         { id: 'inline-radio-2', label: 'Returning to SCC/CBC project' },
//         { id: 'inline-radio-3', label: 'Not Applicable' },
//         ];
//     const group2Options = [
//         { id: 'inline-radio-1', label: 'Yes' },
//         { id: 'inline-radio-2', label: 'No' },
//         { id: 'inline-radio-3', label: 'Not Applicable' },
//         ];
//     const group3Options = [
//         { id: 'inline-radio-1', label: 'Yes' },
//         { id: 'inline-radio-2', label: 'No' },
//         { id: 'inline-radio-3', label: 'Not Applicable' },
//         ];
//     const group4Options = [
//         { id: 'inline-radio-1', label: 'Yes' },
//         { id: 'inline-radio-2', label: 'Already has Certificate' },
//         { id: 'inline-radio-3', label: 'Needs Waiver Test' },
//         { id: 'inline-radio-4', label: 'Not Applicable' },
//         ];

//     // const [selectedOption, setSelectedOption] = useState('');

//     // const handleRadioChange = (event) => { 
//     //     setFormData({ selectedOption: event.target.value});
//     // };
    
//     const handleRadioChange = (event) => {
//         setFormData({ ...formData, selectedOption: event.target.value });
//       };
          


//     const handleSubmit = (event) => {
//         event.preventDefault();
        
//         console.log('testing option button in ButtonGroupTwo', formData.selectedOption);
//     }


//   return (
//       <div>
//         <h5>New to SCC?</h5>
//         <form onSubmit={handleSubmit}>
//             <RadioGroup 
//                 name="group1" 
//                 options={group1Options} 
//                 inline
//                 handleRadioChange={handleRadioChange}
//                 selectedOption={selectedOption}
//             />
//         <h5>Question for SCC employees only - driving for position?</h5>
//         <RadioGroup name="group2" options={group2Options} inline />
//         <h5>Will employee be transporting children?</h5>
//         <RadioGroup name="group3" options={group3Options} inline />
//         <h5>Attending PreService?</h5>
//         <RadioGroup name="group4" options={group4Options} inline />
//         </form>
//       </div>
//     );
// }   

// export default ButtonGroupTwo