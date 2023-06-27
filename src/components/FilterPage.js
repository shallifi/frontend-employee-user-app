import React from 'react'

function FilterPage() {


  return (
    
    <div>
        FilterPage
        <table>
      {/* Table header */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Title/Position</th>
          <th>Office location</th>
          <th>Ext</th>
          <th>Email</th>
          <th>Supervisor Name</th>
          <th>Supervisor Title/Position</th>
          <th>Ext</th>
          <th>Email</th>
          <th>Agency</th>
          <th>Department</th>
          <th>Badge Photo</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {/* Table rows will be dynamically generated */}
      </tbody>
    </table>
  );

        
        
        </div>
  )
}

export default FilterPage