import React, { useEffect, useState } from 'react'
// import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "react-table";
import { useTable, useFilters, useGlobalFilter, useSortBy} from 'react-table'
// import DefaultColFilter from './DefaultColFilter';
import CustomFilter from './CustomFilter';


function FilterPage() {
    const [tableData, setTableData] = useState([]);
    
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
            setGlobalFilter,
            } = useTable(
              { columns, data: tableData },
               useFilters,
               useGlobalFilter,
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
                ])
                  .then(([employeeData, titleData]) => {
                  // console.log('useEffect employeeData', employeeData);
                  // console.log('useEffect titleData', titleData);
                  const modifiedData = employeeData.map(employee => ({
                    ...employee,
                    title: titleData.find(title => title.id === employee.title_id)
                  }));

                console.log('Success:', data)
                setTableData(data); // set the data for the table

                setTableData(modifiedData);

 
                })
                .catch((error) => { console.error('Error:', error);
                });
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); 


    
      return (
        <div>
          <input
            // value={globalFilter || ''}
            type='text'
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={'Search'}
          />
        <table {...getTableProps()}>
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
      </div>
    )
    }
export default FilterPage;

    

