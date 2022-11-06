import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";
import NavbarComponent from "../components/NavBar/NavbarComponent";
import DisplayPageContainer from "./DisplayPageContainer";
import { MasterContext } from "./MasterContainer";
import headerLogo from "../images/headerLogo.png"



const HeaderDiv = styled.div`
position: absolute;
width: 100vw;
background-color : #9795e1;
text-align: right;
max-height: 1vw;
padding-right: 0.5vw;
margin-left: -0.5vw;
padding-top: 2vh;
padding-bottom: 1vh;
z-index: 1000 ;
margin-top: -1vh;
`

const UserPageContainer = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    return (
        <>
        <HeaderDiv> 
            <img src={headerLogo} alt="" height={30} style={{position: "absolute", right: "91vw", top: "1.2vh"}} />
            <a href="/">Log out</a>
        </HeaderDiv>
        
        <NavbarComponent user={state.user} />

        <DisplayPageContainer/>
        </>
        
        

    )
};

export default UserPageContainer;