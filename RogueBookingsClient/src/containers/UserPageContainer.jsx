import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";
import NavbarComponent from "../components/NavBar/NavbarComponent";
import DisplayPageContainer from "./DisplayPageContainer";
import { MasterContext } from "./MasterContainer";

const HeaderDiv = styled.div`
position: absolute;
width: 100vw;
background-color : #282838;
text-align: right;
padding-right: 0.5vw;
margin-left: -0.5vw;
padding-bottom: 1.1vh;
padding-top: 1vh;
z-index: 1000 ;
`

const UserPageContainer = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    return (
        <>
        <HeaderDiv> 
            <a href="/">Log out</a>
        </HeaderDiv>
        
        <NavbarComponent user={state.user} />

        <DisplayPageContainer/>
        </>
        
        

    )
};

export default UserPageContainer;