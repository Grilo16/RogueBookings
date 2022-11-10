import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";

const MonthSelector = () => {
  const { state, dispatch } = useContext(MasterContext);

  const handleGoPrevious = () => {
    dispatch({ type: "GoPrevMonth" });
  };

  const handleGoNext = () => {
    dispatch({ type: "GoNextMonth" });
  };

  return (
    <MonthSelectorDiv>
      <ArrowsDiv onClick={handleGoPrevious}>
        <h1>{"<<<<<<<"}</h1>
      </ArrowsDiv>
      <h1>{state.selectedMonth.name}</h1>

      <ArrowsDiv onClick={handleGoNext}>
        <h1>{">>>>>>>"}</h1>
      </ArrowsDiv>
    </MonthSelectorDiv>
  );
};

const ArrowsDiv = styled.div``;

const MonthSelectorDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MonthSelector;
