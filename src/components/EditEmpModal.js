import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditEmpModal({ employee, showModal, handleCloseModal}) {

    const [editedEmployee, setEditedEmployee] = useState({});

    const handleEditEmployee = async () => {
      try {
        const response = await fetch(`/api/employees/${employee.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedEmployee),
        });
        if (response.ok) {
          handleCloseModal();
        } else {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.log('error updating emp', error);
      }
      console.log('handleEditEmp', editedEmployee);
    };
  

  return (
    <div>
        EditEmpModal
       <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Display employee information here */}
            {employee && (
            <div>
                <p>Name: {employee.first_name} {employee.last_name}</p>
                {/* <p>Last Name: {employee.last_name}</p> */}
                <input type="text" value={editedEmployee.first_name || employee.first_name}
                onChange={(e) => setEditedEmployee({ ...editedEmployee, first_name: e.target.value })} />
                <input type="text" value={editedEmployee.last_name || employee.last_name}
                onChange={(e) => setEditedEmployee({ ...editedEmployee, last_name: e.target.value })} />
                <p>Title: {employee.title?.title_name || 'N/A'}</p>

            </div>
            )}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                Close
                </Button>
                <Button variant="primary" onClick={handleEditEmployee}>
                Edit
                </Button>
            </Modal.Footer>
        </Modal.Body>
        </Modal>
        



        </div>
  )
}

export default EditEmpModal