import React, { useEffect } from 'react'
// import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "react-table";
import { useTable, useSortBy, useFilters} from 'react-table'

function FilterPage(firstName, lastName, setFirstName, setLastName) {
    
    const employeeData = { 
        first_name: firstName,
        last_name: lastName
        };

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
            ],
            []
        );

        // define the data
        const data = React.useMemo(() => [], []);

        // define the table instance
        // const tableInstance = useTable({ columns, data }, useFilters, useSortBy);
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            } = useTable({ columns, data }, useFilters, useSortBy);

        

        useEffect(() => {
            fetch('http://localhost:3000/employees', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(employeeData),
                credentials: 'include'
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data)
                setFirstName('');   
                setLastName('');
                })
                .catch((error) => { console.error('Error:', error);
                });
        }, []);

    
      return (
        <table {...getTableProps()}>
        <thead>
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
