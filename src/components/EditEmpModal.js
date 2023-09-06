import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';



function EditEmpModal({ employee, showModal, handleCloseModal, handleRefreshEmployee}) {

    const [editedEmployee, setEditedEmployee] = useState({});



    const handleEditEmployee = (event) => {
      event.preventDefault();
      console.log('handleEditEmp', editedEmployee);
      fetch(`http://localhost:3000/employees/${employee.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedEmployee),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          handleCloseModal();
          handleRefreshEmployee();
    
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }


  return (
    
       <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Display employee information here */}
            {employee && (
            <div>
                <p>Name: {employee.first_name} {employee.last_name}</p>
          
                <input 
                type="text" 
                value={editedEmployee.first_name || employee.first_name}
                onChange={(e) => {
                const value = e.target.value;
                console.log('First name entry',value);
               
                setEditedEmployee({ ...editedEmployee, first_name: value })} }/>
                
                <input type="text" 
                value={editedEmployee.last_name || employee.last_name}
                onChange={(e) => {
               
                
                setEditedEmployee({ ...editedEmployee, last_name: e.target.value })} }/>
                <p>Title: {employee.title?.title_name || 'N/A'}</p>

            </div>
            )}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal} >
                Close2
                </Button>
                <Button variant="primary" onClick={handleEditEmployee}>
                Edit
                </Button>
            </Modal.Footer>
        </Modal.Body>
        </Modal>
             
  )
}

export default EditEmpModal