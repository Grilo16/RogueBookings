import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarComponent";

const DayComponent = ({ day }) => {
  const [color, setColor] = useState("transparent");

  const { cState, cDispatch } = useContext(CalendarContext);

  const firstWeekDayIndex =
    (((Math.floor((cState.year % 100) / 4) + (cState.year % 100)) % 7) +
      (cState.selectedMonth.monthId + 6 + day)) %
    7;

  const handleClick = () => {
    console.log(day);
  };

  return (
    <>
      {day !== "sozz" 
      ? day.bookings.length > 0 
      ? <DayDiv color={"green"} onClick={handleClick}>
        <h1>{day.date}</h1>
        </DayDiv>
      :<DayDiv color={null} onClick={handleClick}>
      <h1>{day.date}</h1>
      </DayDiv>
      : <DayDiv>
        <h1> </h1>
        </DayDiv>
      }
    </>
  );
};

const DayDiv = styled.div`
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  width: 3.3vw;
  height: 3.3vw;
  border-radius: 10vw;
  &:hover {
    scale: 1.2;
  }
`;

export default DayComponent;
