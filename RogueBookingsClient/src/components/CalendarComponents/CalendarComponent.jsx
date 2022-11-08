import { useReducer } from "react";
import { createContext } from "react";
import styled from "styled-components";
import MonthComponent from "./MonthComponent";
import MonthLabels from "./MonthLabels";

export const CalendarContext = createContext(null)

const reducer = (cState, action)  => {


    
    let nextIndex
    switch(action.type){
        
        
        case "GoNextMonth":
            nextIndex = (cState.selectedMonthIndex + 1) % cState.monthList.length
            return {...cState, selectedMonth: {...cState.monthList[nextIndex]}, selectedMonthIndex: nextIndex}
            
            case "GoPrevMonth":
                nextIndex = cState.selectedMonthIndex -1 < 0 ? 11 : cState.selectedMonthIndex -1 
                return {...cState, selectedMonth: {...cState.monthList[nextIndex]}, selectedMonthIndex: nextIndex}

        default:
            return cState
    }

};


const CalendarComponent = ({marginTop, marginLeft, calendarWidth, cellHeight, cellWidth, cellColor}) => {

    const calendarState = {
        year: 2022,
        monthList: [{name: "january", monthId: 0, monthIndex: 1, days: 31}, {name: "february", monthId: 3, monthIndex: 2, days: 28}, {name: "march", monthId: 3, monthIndex: 3, days: 31}, {name: "april", monthId: 6, monthIndex: 4, days: 30}, {name: "may", monthId: 1, monthIndex: 5, days: 31}, {name: "june", monthId: 4, monthIndex: 6, days: 30}, {name: "july", monthId: 6, monthIndex: 7, days: 31}, {name: "august", monthId: 2, monthIndex: 8, days: 31}, {name: "september", monthId: 5, monthIndex: 9, days: 30}, {name: "october", monthId: 0, monthIndex: 10, days: 31}, {name: "november", monthId: 3, monthIndex: 11, days: 30}, {name: "december", monthId: 5, monthIndex: 12, days: 31}],
        selectedMonth: {name: "january", monthIndex: 1, monthId: 1, days: 31},
        bookings : [{type: "study", date: "2022-1-3", studio: "ghibli"},{type: "study", date: "2022-1-15", studio: "ghibli"},{type: "teach", date: "2022-02-3", studio: "ghibli"},{type: "teach", date: "2022-1-5", studio: "ghibli"}],
        selectedMonthIndex: 0,
        testDate : "2022-01-1"
        
    }

    const [cState, cDispatch] = useReducer(reducer, calendarState)


    return (
        <CalendarContext.Provider value={{cState, cDispatch}}>
            <MainCalendarContainer>
                
            <MonthComponent/>


            </MainCalendarContainer>
        </CalendarContext.Provider>
        )
}; 


const MainCalendarContainer = styled.div`
width: max-content;
margin-top: 24.5vw;
margin-left: 22vw;
`


export default CalendarComponent;