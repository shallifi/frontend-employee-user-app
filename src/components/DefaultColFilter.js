import React from 'react'

const DefaultColFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    const count = preFilteredRows.length;
  
    return (
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  };
  

export default DefaultColFilter