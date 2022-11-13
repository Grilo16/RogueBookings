import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";

const DayComponent = ({ day }) => {


  const [color, setColor] = useState("");

  const { state, dispatch } = useContext(MasterContext);

  const firstWeekDayIndex =
    (((Math.floor((state.year % 100) / 4) + (state.year % 100)) % 7) +
      (state.selectedMonth.monthId + 6 + day)) %
    7;


    useEffect(()=>{

        if (day !== "sozz" && day.bookings.length > 0){
            day.bookings.map((booking)=>{
                if (booking.type === "study"){
                    setColor("#b0afe8")
                }else if (booking.type === "teach"){
                    setColor("#ffcf7e")
                }
            })

        }
    },[])
    
    const handleClick = () => {
        setColor("purple");
    };
    

    if (day !== "sozz"){
        if(day.bookings.length > 0){
            return (
                <DayDiv color={color} onClick={handleClick}>
                <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
                </DayDiv>
            )
        }else{
            return (
                <DayDiv color={null} onClick={handleClick}>
                <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
                </DayDiv>
            )
        }
    }else {
        return (
            <DayDiv>
            <CalendarNumbersH1>  </CalendarNumbersH1>
            </DayDiv>
        )
    };

}
    
    const DayDiv = styled.div`
    background-color: ${(props) => (props.color ? props.color : "transparent")};
    border-radius: 10vw;
    margin-top: -0.3vw;
    margin-bottom: -0.3vw;
    width: 2.5vw;
    height: 2.5vw;
    &:hover {
        scale: 1.2;
    }
    
    `;
    
const CalendarNumbersH1 = styled.div`
text-align: center;
margin-top: 0.9vw;
`

export default DayComponent;

//     return (
//         <>
//       {day !== "sozz" 
//       ? day.bookings.length > 0 
//       ? <DayDiv color={color} onClick={handleClick}>
//         <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
//         </DayDiv>
//       :<DayDiv color={null} onClick={handleClick}>
//       <CalendarNumbersH1>{day.date}</CalendarNumbersH1>
//       </DayDiv>
//       : <DayDiv>
//         <CalendarNumbersH1>  </CalendarNumbersH1>
//         </DayDiv>
//       }
//     </>
//   );
