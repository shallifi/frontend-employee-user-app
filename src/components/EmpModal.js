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
            <p>First Name: {employee.first_name}</p>
            <p>Last Name: {employee.last_name}</p>
            {/* Add more employee fields as needed */}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmpModal;
