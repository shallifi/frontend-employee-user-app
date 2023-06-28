import React, { useEffect, useState } from 'react'
// import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "react-table";
import { useTable, useSortBy, useFilters} from 'react-table'

function FilterPage({}) {
    const [tableData, setTableData] = useState([]);
    

    // const employeeData = { 
    //     first_name: firstName,
    //     last_name: lastName
    //     };

        // define the columns
        const columns = React.useMemo(
            () => [
                {
                    Header: 'First Name',
                    accessor: 'first_name', // accessor is the "key" in the data
                },
                {
                    Header: 'Last Name',
                    accessor: 'last_name',
                },
                {
                    Header: 'Title/Position',
                    // accessor: 'title_name',
                    accessor: (employee) => employee.title?.title_name || 'N/A'
                },
            ],
            []
        );
            console.log('tableData on filterpage', tableData);
        // define the data
        const data = React.useMemo(() => [], []);

        // define the table instance
      
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            } = useTable({ columns, data: tableData }, useFilters, useSortBy);

        

        useEffect(() => {
          Promise.all([
            fetch('http://localhost:3000/employees', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                // body: JSON.stringify(employeeData),
                credentials: 'include'
                }).then(response => response.json()),
                fetch('http://localhost:3000/titles', {
                  method: 'GET',
                  headers: {"Content-Type": "application/json"},
                  credentials: 'include'
                  }).then(response => response.json()),
                ])
                // .then(data => {
                .then(([employeeData, titleData]) => {
                  console.log('useEffect employeeData', employeeData);
                  console.log('useEffect titleData', titleData);
                  const modifiedData = employeeData.map(employee => ({
                    ...employee,
                    title: titleData.find(title => title.id === employee.title_id)
                  }));

                console.log('Success:', data)
                setTableData(data); // set the data for the table
                // const modifiedData = data.map(employee => ({ 
                //   ...employee,
                //   title_name: employee.title.title_name
                // }));
                setTableData(modifiedData);

                // setFirstName('');   
                // setLastName('');
                })
                .catch((error) => { console.error('Error:', error);
                });
        }, []); 


    
      return (
        <table {...getTableProps()}>
        <thead>
          {/* // Loop over the header rows */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
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
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    )
    }
export default FilterPage;

    


//   return (
    
//     <div>
//         FilterPage
//         <table>
//       {/* Table header */}
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Title/Position</th>
//           <th>Office location</th>
//           <th>Ext</th>
//           <th>Email</th>
//           <th>Supervisor Name</th>
//           <th>Supervisor Title/Position</th>
//           <th>Ext</th>
//           <th>Email</th>
//           <th>Agency</th>
//           <th>Department</th>
//           <th>Badge Photo</th>
//         </tr>
//       </thead>

//       {/* Table body */}
//       <tbody>
//         {/* Table rows will be dynamically generated */}
//       </tbody>
//     </table>


        
        
//         </div>
//   )
// }
