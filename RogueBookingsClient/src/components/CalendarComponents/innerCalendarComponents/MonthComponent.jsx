import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";
import WeekComponent from "./WeekComponent";

const MonthComponent = () => {
    
const {state, dispatch} = useContext(MasterContext);

    const calendar = []

const firstWeekDayIndex = (((Math.floor((state.year%100)/4) + (state.year%100))%7)+(state.selectedMonth.monthId + 6 + 1))%7

    let selectedMonth = state.monthList.indexOf(state.monthList.find(month => month.name === state.selectedMonth.name))+1
    let counter = 0;
    let dayCounter = 0;
    
    for (let i = 1 ; i <= 6 ; i++){
        let week = [];
        for (let j = 1; j<=7; j++){
            counter++
            if (counter >= firstWeekDayIndex){
                dayCounter ++;
                if ( dayCounter > 28 && [2].includes(selectedMonth)){
                    week.push("sozz")
                    continue
                }else if (dayCounter > 30 && [4, 6, 8, 9, 11].includes(selectedMonth)){
                    week.push("sozz")
                    continue
                }else if (dayCounter > 31){
                    week.push("sozz")
                    continue
                }else{
                    week.push({date: dayCounter, bookings: state.bookings.filter((booking)=>{
                        return new Date(booking.date).getMonth() === state.selectedMonth.monthIndex -1
                    }).filter((booking) => {
                        return parseInt(new Date(booking.date).getDay()) === dayCounter
                    }) })
                }
            }else {
                week.push("sozz")
            } 
        }
        calendar.push(week)
    }
    const weeks = calendar.map((week, index)=>{
        return (
            <WeekComponent key={index} week={week}/>
        )
    })    
    return (
        <CalendarGridDiv> 
            {weeks}    
        </CalendarGridDiv>
    )
};
const CalendarGridDiv = styled.div`

`


export default MonthComponent;