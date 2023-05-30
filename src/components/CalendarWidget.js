import React, { useState } from 'react'
import DatePicker from 'react-datepicker'


function CalendarWidget() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (e) => {
      setSelectedDate(e);
    }

  return (
    
    <div>Start Date
       
      <DatePicker
        selected={selectedDate}
        onChange={handleDateClick}
        dateFormat='MM/dd/yyyy'
        minDate={new Date()} // disable past dates
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // disable weekends
        isClearable // clear date need to fix formating
        showYearDropdown
        scrollableMonthYearDropdown
      />
                      
    </div>

  )
  
}

export default CalendarWidget