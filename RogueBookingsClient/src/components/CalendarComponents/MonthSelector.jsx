import { useContext } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarComponent";

const MonthSelector = () => {

const {cState, cDispatch} = useContext(CalendarContext)

const handleGoPrevious = () => {

    cDispatch({type: "GoPrevMonth"})
}

const handleGoNext = () => {
    cDispatch({type: "GoNextMonth"})

}

    return (
        <MonthSelectorDiv>
        <ArrowsDiv onClick={handleGoPrevious}>
        <h1>{"<<<<<<<"}</h1>
        </ArrowsDiv>
        <h1>{cState.selectedMonth.name}</h1>

        <ArrowsDiv onClick={handleGoNext}>
        <h1 >{">>>>>>>"}</h1>
        </ArrowsDiv>
        </MonthSelectorDiv>
    )
};

const ArrowsDiv = styled.div`
`


const MonthSelectorDiv = styled.div`
display: flex;
justify-content: space-between;
`

export default MonthSelector;