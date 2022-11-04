import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChanged = (date) => {
    setSelectedDate(date);
  };

  return <ReactCalendar onChange={onDateChanged} />;
};

export default Calendar;
