import React from 'react';
import { Modal, Button } from 'react-bootstrap';



const EmpModal = ({ employee, showModal, handleCloseModal }) => {



  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display employee information here */}
        {employee && (
          <div>
            <p>Name: {employee.first_name} {employee.last_name}</p>
            {/* <p>Last Name: {employee.last_name}</p> */}

            {/* <input type="text" value={editedEmployee.first_name || employee.first_name}
            onChange={(e) => setEditedEmployee({ ...editedEmployee, first_name: e.target.value })} /> */}
           
            <p>Title: {employee.title?.title_name || 'N/A'}</p>
            <p>Agency: {employee.agency?.agency_name || 'N/A'}</p>
            <p>Department: {employee.department?.department_name || 'N/A'}</p>
            <p>Office: {employee.office?.office_name || 'N/A'} </p>
            {/* <p>{employee.office?.office_phone} </p>
            <p> {employee.office?.address}</p> */}
             <p>Extension: {employee.extension}</p>
            <p>Supervisor: {employee.supervisor ? `${employee.supervisor.first_name} ${employee.supervisor.last_name}` : 'N/A'}</p>
            {/* Add more employee fields as needed */}
          </div>
        )}
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleEditEmployee}> Add onClick handler to edit */}
          {/* Edit */}
        {/* </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default EmpModal;
