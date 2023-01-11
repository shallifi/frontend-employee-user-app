import React, { useState } from 'react'
import DatePicker from 'react-datepicker'


function CalendarWidget() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (e) => {
      setSelectedDate(e);
    }

  return (
    
    <div>Calendar
       
      <DatePicker
        selected={selectedDate}
        onChange={handleDateClick}
      />
        
        
      
    </div>

  )
  
}

export default CalendarWidget