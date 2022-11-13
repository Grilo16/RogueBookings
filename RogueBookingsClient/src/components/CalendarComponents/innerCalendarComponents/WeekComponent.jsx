import { useContext, useReducer } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";
import DayComponent from "./DayComponent";

const WeekComponent = ({ week }) => {
  const { state, dispatch } = useContext(MasterContext);

  const days = week.map((day, index) => {
    return <DayComponent day={day} key={index} />;
  });

  return <WeekDiv>{days}</WeekDiv>;
};

const WeekDiv = styled.div`
  display: flex;
  margin-bottom: 0.5vw;
  justify-content: space-between;
`;

export default WeekComponent;
