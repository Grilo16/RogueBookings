import { useContext } from "react";
import styled from "styled-components";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import DefaultBusinessView from "../../components_refactored/basePages/DefaultBusinessView";
import { MasterContext } from "../../containers/MasterContainer";
import RevenuePage from "./SubPages/RevenuePage";
import SchedulePage from "./SubPages/SchedulePage";
import SettingsPage from "./SubPages/SettingsPages/SettingsPage";
import StudentsPage from "./SubPages/StudentsPage";
import TeachersPage from "./SubPages/teachersPage/TeachersPage";

const BusinessDisplayPage = () => {

    const {state, dispatch} = useContext(MasterContext)

    return (
            <DefaultBusinessView>

            {
                state.selectedPage === "Schedule"
                ? <SchedulePage/>
                : state.selectedPage === "Teachers"
                ? <TeachersPage/>
                : state.selectedPage === "Students"
                ?<StudentsPage/>
                : state.selectedPage === "Revenue"
                ?<RevenuePage/>
                : state.selectedPage === "Settings"
                ? <SettingsPage/>
                :<ErrorPage/>
            }

            </DefaultBusinessView>
        )
};


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

export default BusinessDisplayPage;


