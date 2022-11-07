import { createContext, useContext, useReducer } from "react";
import styled from "styled-components";
import NavbarComponent from "../components/NavBar/NavbarComponent";
import DisplayPageContainer from "./DisplayPageContainer";
import { MasterContext } from "./MasterContainer";
import headerLogo from "../images/headerLogo.png"



const HeaderDiv = styled.div`
background-color : #9795e1;
position: absolute;
display: flex;
width: 100vw;
height: 1.5vw;
padding-bottom: 0.6vw;
z-index: 1000 ;
justify-content: space-between;
`

const StyledImg = styled.img`
height: 2vw;
`

const StyledLogOut = styled.a`
margin-top: 0.5vw;
margin-right: 0.5vw;
font-size: 0.9vw;
`

const UserPageDiv = styled.div`
display: flex;
`


const UserPageContainer = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    return (
        <>
        <HeaderDiv> 
            <StyledImg src={headerLogo} alt="" />
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