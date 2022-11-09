import { createContext, useReducer } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "../../containers/MasterContainer";
import MiniMenu from "./MiniMenu";
import RevenuePage from "./pages/RevenuePage";
import SchedulePage from "./pages/SchedulePage";
import SettingsPage from "./pages/SettingsPages/SettingsPage";
import StudentsPage from "./pages/StudentsPage";
import TeachersPage from "./pages/teachersPage/TeachersPage";

export const BusinessContext = createContext(null);


const reducer = (bState, action) => {
    switch(action.type){

        case "SelectPage":
            return {...bState, selectedPage : action.selectedPage}


        case "ToggleTeacherBio":
            return {...bState, showTeacherBio: !bState.showTeacherBio}


        default: 
            return bState
    }
}



const BusinessPage = () => {

    const initialStates = {
        selectedPage: "Schedule",
        showTeacherBio: false,
    }


const [bState, bDispatch] = useReducer(reducer, initialStates);

const {state, dispatch} = useContext(MasterContext)

    const owners = state.selectedBusiness.owners.map((owner, index)=>{
        return (
            <OwnerH3 key={index}>{owner.owner.firstName}</OwnerH3>
        )
    })

    const members = state.selectedBusiness.members.map((member, index)=>{
        return (
            <MemberH3 key={index}>{member.user.firstName}</MemberH3>
        )
    })

    const lessons = state.selectedBusiness.lessons.map((lesson, index)=>{
        return (
            <LessonH3 key={index}>{lesson.name}</LessonH3>

        )
    })

    return(
        <BusinessContext.Provider value={{bState, bDispatch}}> 
        <BusinessContainerDiv>  

       <MiniMenu className="scroll-within"/>
            
        <DisplayDetailDiv className="scroll-within"> 
            {
                bState.selectedPage === "Schedule"
                ? <SchedulePage/>
                : bState.selectedPage === "Teachers"
                ? <TeachersPage/>
                : bState.selectedPage === "Students"
                ?<StudentsPage/>
                : bState.selectedPage === "Revenue"
                ?<RevenuePage/>
                : bState.selectedPage === "Settings"
                ? <SettingsPage/>
                :null
            }
        </DisplayDetailDiv>



        </BusinessContainerDiv>



</BusinessContext.Provider>
    )
};

{/* <ContentDiv className = "scroll-within">
    <h1>{state.selectedBusiness.name}</h1>
    
    <h3>business Owners</h3>
    {owners}
    <h3>business members</h3>
    {members}
    <h3>business Lessons</h3>
    {lessons}
</ContentDiv> */}
export default BusinessPage;


const BusinessContainerDiv = styled.div`
display: flex;
`

const DisplayDetailDiv = styled.div`
height: 46.9vw;
background-color: white;
margin-left: 1.2vw;
margin-top: 3.3vw;
width: 69.8vw;
border-radius: 1.5vw;
overflow: scroll;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
`

const DisplayMenuDiv = styled.div`
background-color: white;
margin-top: 3.3vw;
margin-left: -0.4vw;
width: 12.5vw;
border-radius: 1.5vw;
`

const MenuImg = styled.img`
border-radius: 10vw;
margin-top: 2vw;
`

const MenuTitleDiv = styled.div`
text-align: center;

`

const MenuContentDiv = styled.div`
text-align: center;

`

const OwnerH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: cyan
`

const MemberH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: yellow
`

const LessonH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: purple
`
