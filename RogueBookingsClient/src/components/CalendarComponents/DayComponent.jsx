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
        <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
        </DayDiv>
      :<DayDiv color={null} onClick={handleClick}>
      <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
      </DayDiv>
      : <DayDiv>
        <CalendarNumbersH1> </CalendarNumbersH1>
        </DayDiv>
      }
    </>
  );
};

const DayDiv = styled.div`
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  border-radius: 10vw;
  margin-top: -0.3vw;
  margin-bottom: -0.3vw;
  width: 2.5vw;
  height: 2.5vw;
  &:hover {
    scale: 1.2;
  }
`;

const CalendarNumbersH1 = styled.div`
margin-top: 0.9vw;
`

export default DayComponent;
