import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";
import NavbarComponent from "../components/NavBar/NavbarComponent";
import DisplayPageContainer from "./DisplayPageContainer";
import { MasterContext } from "./MasterContainer";
import headerLogo from "../images/headerLogo.png"
import {ReactComponent as Logo} from "../images/logo.svg"



const HeaderDiv = styled.div`
background-color : #9795e1;
position: absolute;
display: flex;
width: 100vw;
height: 1.55vw;
padding-bottom: 0.6vw;
z-index: 1000 ;
justify-content: space-between;
box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.2);

`


const LogoDiv = styled.div`
width: max-content;
display: flex
`

const StyledLogOut = styled.a`
color: white;
text-decoration: none;
margin-top: 0.5vw;
margin-right: 0.5vw;
font-size: 1vw;
`
const HeaderTitle = styled.h1`
color: #4a499e;
margin: 0vw;
margin-top: 0.2vw;
font-size: 1.5vw;
margin-left: 0.5vw;


`

const UserPageDiv = styled.div`
display: flex;
`


const UserPageContainer = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    return (
        <>
        <HeaderDiv> 
            <LogoDiv>

            <Logo fill={"#4a499e"} style={{marginLeft: "0.9vw", height: "1.9vw", marginTop: "0.1vw"  }}/>
            <HeaderTitle>Rogue Bookings</HeaderTitle>
            </LogoDiv>
            
            <StyledLogOut href="/">Log out</StyledLogOut>
        </HeaderDiv>
        <UserPageDiv> 

        <NavbarComponent user={state.user} />
        <DisplayPageContainer/>
        
        </UserPageDiv>

        </>
        
        

    )
};

export default UserPageContainer;