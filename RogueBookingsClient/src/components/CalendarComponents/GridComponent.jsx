import { useContext } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarComponent";
import DayComponent from "./DayComponent";
import WeekComponent from "./WeekComponent";

const GridComponent = () => {
    
const {cState, cDispatch} = useContext(CalendarContext);

    const calendar = []

const firstWeekDayIndex = (((Math.floor((cState.year%100)/4) + (cState.year%100))%7)+(cState.selectedMonth.monthId + 6 + 1))%7

    let selectedMonth = cState.monthList.indexOf(cState.monthList.find(month => month.name === cState.selectedMonth.name))+1
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
                    week.push({date: dayCounter, bookings: cState.bookings.filter((booking)=>{
                        return new Date(booking.date).getMonth() === cState.selectedMonth.monthIndex -1
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


export default GridComponent;