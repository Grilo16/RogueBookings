import { useContext, useReducer } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarComponent";
import DayComponent from "./DayComponent";

const WeekComponent = ({week}) => {

const {cState, cDispatch} = useContext(CalendarContext)


    const days = week.map((day, index) => {
        return (

            <DayComponent day={day} key={index}/>
        )
    })


    return (
        <WeekDiv> 
            {days}
        </WeekDiv>

    )
};

const WeekDiv = styled.div`
display: flex;
margin-bottom: 0.5vw;
justify-content: space-around;

`


export default WeekComponent;