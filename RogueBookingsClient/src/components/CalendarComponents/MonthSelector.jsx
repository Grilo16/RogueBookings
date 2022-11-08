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
position: relative;
z-index: 1;
`


const MonthSelectorDiv = styled.div`
position: relative;
height: 4vw;
width: 42.69vw;
margin-left: 17.8vw;
display: flex;
justify-content: space-between;
z-index: 0;
`

export default MonthSelector;