import styled from "styled-components";
import { useContext } from "react";
import MonthComponent from "./innerCalendarComponents/MonthComponent";
import MonthLabels from "./calendarHelpers/MonthLabelComponent";
import MonthSelector from "./calendarHelpers/MonthSelectorComponent";
import { MasterContext } from "../../containers/MasterContainer";

const CalendarComponent = () => {

const {state, dispatch} = useContext(MasterContext)



    return (
        <MonthCalendarDiv>

            <MonthSelector/>
            
            <MonthLabels/>

            <MonthComponent/>

        </MonthCalendarDiv>
    )
};


const MonthCalendarDiv = styled.div`
width: 30vw;
`
export default CalendarComponent;