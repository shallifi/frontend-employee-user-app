// import Form from 'react-bootstrap/Form';
// import useForm from '../hooks/useForm';


import React from 'react';

function RadioGroup({ name, options, handleRadioChange, selectedOption }) {
  return (
    <div>
      {options.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            name={name}
            id={option.id}
            value={option.label}
            onChange={handleRadioChange}
            checked={selectedOption === option.label}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}





// function RadioGroup({ name, options, inline, handleRadioChange, selectedOption }) {
//   return (
//     <div className="mb-3">
//       {options.map((option) => (
//         <div key={option.id} className="form-check form-check-inline">
//           <input
//             className="form-check-input"
//             type="radio"
//             name={name}
//             id={option.id}
//             value={option.id}
//             handleRadioChange={handleRadioChange}
//             checked={selectedOption === option.id}
//             selectedOption={selectedOption}
//           />
//           <label className="form-check-label" htmlFor={option.id}>
//             {option.label}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }
export default RadioGroup;
// how to get value of selected radio button? Also need to figure out the Form error