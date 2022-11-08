import { useContext } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarComponent";
import GridComponent from "./GridComponent";
import MonthLabels from "./MonthLabels";
import MonthSelector from "./MonthSelector";

const MonthComponent = () => {

const {cState, cDispatch} = useContext(CalendarContext)





    return (
        <MonthCalendarDiv>
            <MonthSelector/>
            <MonthLabels/>
            <GridComponent/>
        </MonthCalendarDiv>
    )
};


const MonthCalendarDiv = styled.div`

`
export default MonthComponent