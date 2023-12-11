import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.css';

const Calendar = ({ backgroundColor = '#f0f0f0', textColor = '#333' }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const days = daysInMonth(currentMonth);
    const startingDay = firstDayOfMonth.getDay();

    let calendar = [[]];
    let dayCounter = 1;

    for (let row = 0; row < 6; row++) {
      calendar[row] = [];
      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col >= startingDay) || (row > 0 && dayCounter <= days)) {
          calendar[row][col] = dayCounter;
          dayCounter++;
        }
      }
    }

    return calendar;
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handleMonthChange = (change) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + change, 1));
    setSelectedDate(null);
  };

  useEffect(() => {
    setSelectedDate(null);
  }, [currentMonth]);

  const calendar = generateCalendar();

  return (
    <div className={styles.calendar} style={{ backgroundColor, color: textColor }}>
      <div className={styles.header}>
        <button onClick={() => handleMonthChange(-1)}>Previous Month</button>
        <h2>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => handleMonthChange(1)}>Next Month</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, rowIndex) => (
            <tr key={rowIndex}>
              {week.map((day, colIndex) => (
                <td
                  key={colIndex}
                  className={styles.day}
                  onClick={() => day && handleDateClick(day)}
                  style={{ background: selectedDate && day === selectedDate.getDate() ? '#ffcccb' : 'none' }}
                >
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p>
    </div>
  );
};

export default Calendar;


// "use client"
// import React, { useState } from "react";
// import { Calendar, theme } from 'antd';

// const onPanelChange = (value, mode) => {
//   console.log(value.format('YYYY-MM-DD'), mode);
// };
// const  MyCalendar= () => {
//   const { token } = theme.useToken();
//   const wrapperStyle = {
//     width: 350,
//     border: `1px solid ${token.colorBorderSecondary}`,
//     borderRadius: token.borderRadiusL
//   };
//   return (
//     <div style={wrapperStyle}>
//       <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//     </div>
//   );
// };
// export default MyCalendar