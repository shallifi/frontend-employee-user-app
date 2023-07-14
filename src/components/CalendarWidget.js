import React, { useState } from 'react'
import DatePicker from 'react-datepicker'


function CalendarWidget({ onDateChange}) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (e) => {
      setSelectedDate(e);
      onDateChange(e);
    }

  return (
    
    <div>
      <h5>Start Date</h5>
       
      <DatePicker
        selected={selectedDate}
        onChange={handleDateClick}
        dateFormat='MM/dd/yyyy'
        minDate={new Date()} // disable past dates
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // disable weekends
        isClearable // clear date need to fix formating
        showYearDropdown
        scrollableMonthYearDropdown
        popperPlacement=''
      />
                      
    </div>

  )
  
}

export default CalendarWidget