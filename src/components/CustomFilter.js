// CustomFilter.js

import React from 'react';

function CustomFilter({ column }) {
  const { filterValue, setFilter } = column;

   
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
  
        placeholder={`Search ...`}
    />
  );
}

export default CustomFilter;
