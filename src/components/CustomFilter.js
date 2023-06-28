// CustomFilter.js

import React from 'react';

function CustomFilter({ column }) {
  const { filterValue, setFilter } = column;

    // const count = column.preFilteredRows.length;
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
    //   placeholder={`"Search ${count} ..."`}
        placeholder={`Search ...`}
    />
  );
}

export default CustomFilter;
