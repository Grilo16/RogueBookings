import styled from "styled-components";
import { useContext } from "react";
import { HolderContext } from "../../MasterContainer";
import DailyCalendar from "./DailyCalendar";


const MyBookingsDiv = styled.div`
background-color : white;
margin-left : 5vw;
margin-top : 5vh;
max-width : 73vw;
min-width : 73vw;
height: 90vh;
border-radius: 5vh;
color: black;
text-align: center;
`

const FilterCalendarDiv = styled.div`
background-color: grey;
display: flex;
width : fit-content;
margin-left: 26vw;
border-radius: 1.3vw;
`
const CalendarFilter = styled.h4`
margin-left : 2vw;
padding-right: 2vw;

`

const MyBookingsContainer = () => {

const {state, dispatch} = useContext(HolderContext)


    return (
        <MyBookingsDiv>
            <br />
            <h2>My Calendar</h2>
            <br />
            <FilterCalendarDiv>
                <CalendarFilter>Day</CalendarFilter>
                <CalendarFilter>Week</CalendarFilter>
                <CalendarFilter>Month</CalendarFilter>

                
            </FilterCalendarDiv>
            <DailyCalendar/>


        </MyBookingsDiv>
    )
};

export default MyBookingsContainer;