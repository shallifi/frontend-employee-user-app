import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EditEmpModal from './EditEmpModal';
// import { useLocation, useNavigate } from 'react-router-dom';




const EmpModal = ({ employee, showModal, handleCloseModal }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  // const navigate = useNavigate();
  // const location = useLocation();

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseModalAndReload = () => {
    handleCloseModal();
    window.location.reload();
  };

  // const handleEditEmployee = (updatedEmployee) => {
  //   console.log('handleEditEmp', updatedEmployee);
  //   setUpdatedEmployee(updatedEmployee);
  // };

  const handleRefreshEmployee = async (updatedEmployee) => {
    try {
      console.log('handleEditEmp in EmpModal', updatedEmployee);
      setUpdatedEmployee(updatedEmployee);

      const response = await fetch(`http://localhost:3000/employees/${employee.id}`) 
        const refreshedEmployee = await response.json();

      setUpdatedEmployee(refreshedEmployee);
    } catch (error) {
      console.error('Error refreshing emp data', error.message);
    }
  }



  return (
    <>
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Display employee information here */}
        {employee && (
          <div>
            <p>Name: {employee.first_name} {employee.last_name}</p>
              
            <p>Title: {employee.title?.title_name || 'N/A'}</p>
            <p>Agency: {employee.agency?.agency_name || 'N/A'}</p>
            <p>Department: {employee.department?.department_name || 'N/A'}</p>
            <p>Office: {employee.office?.office_name || 'N/A'} </p>
            <p>Extension: {employee.extension}</p>
            <p>Supervisor: {employee.supervisor ? `${employee.supervisor.first_name} ${employee.supervisor.last_name}` : 'N/A'}</p>
            {/* Add more employee fields as needed */}
          </div>
        )}
        {updatedEmployee && (
          <div>
            <p>Name: {updatedEmployee.first_name} {updatedEmployee.last_name}</p>
            <p>Title: {updatedEmployee.title?.title_name || 'N/A'}</p>
            <p>Agency: {updatedEmployee.agency?.agency_name || 'N/A'}</p>
            <p>Department: {updatedEmployee.department?.department_name || 'N/A'}</p>
            <p>Office: {updatedEmployee.office?.office_name || 'N/A'} </p>
            <p>Extension: {updatedEmployee.extension}</p>
            <p>Supervisor: {updatedEmployee.supervisor ? `${updatedEmployee.supervisor.first_name} ${updatedEmployee.supervisor.last_name}` : 'N/A'}</p>
            {/* Add more employee fields as needed */}
          </div>
        )}
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalAndReload}>
          Close1
        </Button>
        <Button variant="primary" onClick={handleEditModal}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>

            {showEditModal && (
              <EditEmpModal
                employee={employee}
                showModal={showEditModal}
                handleCloseModal={() => setShowEditModal(false)}
                navigateBack={() => setShowEditModal(false)}
                // handleEditEmployee={handleEditEmployee}
                
                handleRefreshEmployee={handleRefreshEmployee}
                // navigateBack={() => navigate(location.state.from)}
              />
            )
            }
  </>
            
            
  );
};

export default EmpModal;
