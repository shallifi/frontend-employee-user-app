import React, { useEffect, useState } from 'react'
// import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "react-table";
// import DefaultColFilter from './DefaultColFilter';
import { useTable, useFilters, useSortBy} from 'react-table'
import CustomFilter from './CustomFilter';
import EmpModal from './EmpModal';



function FilterPage({ employees, showModal, setShowModal}) {
    const [tableData, setTableData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    // const [isHovered, setIsHovered] = useState(false);

    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'first_name', // accessor is the "key" in the data
                Filter: CustomFilter,
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
                Filter: CustomFilter,
            },
            {
                Header: 'Title/Position',
                // accessor: 'title_name',
                accessor: (employee) => employee.title?.title_name || 'N/A',
                Filter: CustomFilter,
            },
            {
              Header: 'Office',
              accessor: (employee) => employee.office?.office_name || 'N/A',
              Filter: CustomFilter,
            },
            {
              Header: 'Extension',
              accessor: 'extension',
            },
            {
              Header: 'Supervisor',
              accessor: (employee) => employee.supervisor ? `${employee.supervisor.first_name} ${employee.supervisor.last_name}` : 'N/A',
              Filter: CustomFilter,
            },
            {
              Header: 'Agency',
              accessor: (employee) => employee.agency?.agency_name || 'N/A',
              Filter: CustomFilter,
            },
            {
              Header: 'Department',
              accessor: (employee) => employee.department?.department_name || 'N/A',
              Filter: CustomFilter,
            },
        ],
        []
    );
        // console.log('tableData on filterpage', tableData);
    // define the data
    const data = React.useMemo(() => [], []);
      
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            // setGlobalFilter,
            } = useTable(
              { columns, data: tableData },
               useFilters,
              //  useGlobalFilter,
               useSortBy
               );

        

        useEffect(() => {
          Promise.all([
            fetch('http://localhost:3000/employees', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                credentials: 'include'
                }).then(response => response.json()),
                fetch('http://localhost:3000/titles', {
                  method: 'GET',
                  headers: {"Content-Type": "application/json"},
                  credentials: 'include'
                  }).then(response => response.json()),
                fetch('http://localhost:3000/offices', {
                  method: 'GET',
                  headers: {"Content-Type": "application/json"},
                  credentials: 'include'
                  }).then(response => response.json()),
                  fetch('http://localhost:3000/agencies', {
                    method: 'GET',
                    headers: {"Content-Type": "application/json"},
                    credentials: 'include'
                    }).then(response => response.json()),
                    fetch('http://localhost:3000/departments', {
                      method: 'GET',
                      headers: {"Content-Type": "application/json"},
                      credentials: 'include'
                      }).then(response => response.json()),
                ])
                  .then(([employeeData, titleData, officeData, agencyData, departmentData]) => {
                  // console.log('useEffect employeeData', employeeData);
                  // console.log('useEffect titleData', titleData);
                  // console.log('useEffect officeData', officeData);
                  const modifiedData = employeeData.map(employee => ({
                    ...employee,
                    title: titleData.find(title => title.id === employee.title_id),
                    office: officeData.find(office => office.id === employee.office_id),
                    supervisor: employeeData.find((supervisor) => supervisor.id === employee.employee_id),
                    agency: agencyData.find(agency => agency.id === employee.agency_id),
                    department: departmentData.find(department => department.id === employee.department_id), 
                  }));
              
                // console.log('Success:', data)
                setTableData(data); // set the data for the table

                setTableData(modifiedData);

                // console.log('modifiedData', modifiedData);
                
                })
                .catch((error) => { console.error('Error:', error);
                });
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); 

        const handleOpenModal = (employee) => {
          setSelectedEmployee(employee);
        }

    
      return (
        <div>

        <table {...getTableProps()}
        className='table table-striped table-bordered table-hover' //adding the bootstrap classes to the table
        style={{ width: '100%' }} // This will force the table body to overflow and scroll, since there is not enough room

        
        >
        <thead>
          {/* // Loop over the header rows */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Render the columns filter UI */}
                  {column.Filter ? (
                    <div>{column.render('Filter')}</div>
                  ) : null}
                  
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // Use a React.Fragment here so the table markup is still valid
              <tr 
                {...row.getRowProps()}
                onClick={() => {
                  console.log('selected row:', row);
                  handleOpenModal(row.original);
                  // selectedEmployee(row.original);
                  // setShowModal(true);
                }}
      
                >

                {row.cells.map((cell) => {
                  
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
          <EmpModal
            employee={selectedEmployee}
            showModal={selectedEmployee !== null}
            handleCloseModal={() => setSelectedEmployee(null)}
            // handleCloseModal={() => setShowModal(false)}
            />
      </table>



      </div>
    )
    }
export default FilterPage;

    

