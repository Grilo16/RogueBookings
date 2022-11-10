import { useContext, useState } from "react";
import { MasterContext } from "./MasterContainer";
import styled from "styled-components";
import SignUpForm from "../components/Forms/SignUpForm";
import LogInForm from "../components/Forms/LogInForm";
import logo from "../images/Logo.png"
import placeholderArt from "../images/placeholderArt.png"
import actualArt from "../images/actualArt.png"


const GuestPageDiv = styled.div`
display: flex;
text-align: center;
height: 100vh;
`

const LogInContainerDiv = styled.div`
background-image: linear-gradient(to bottom right, #7d7dd5 , #8f8fd3, #d4d4f0);
color: white;
width: 50vw;
`

const GraphicsContainerDiv = styled.div`
background-color: white;
width: 50vw;
`

const StyledH1 = styled.h1`
margin-top: 10vw;
font-size: 5vw;
margin-bottom: 3vw;
`

const LogoImg = styled.img`
height: 4.5vw;
width: 14.5vw;
padding-right: 35vw;
`

const HeroImg = styled.img`
height: 42vw;
margin-left: 4vw;
margin-top: 0vw;
`

const GuestPageContainer = () => {
    const {state, dispatch} = useContext(MasterContext)
 
    const [showPage, setShowPage] = useState("login")


    return (
<GuestPageDiv>
    <GraphicsContainerDiv>
            <LogoImg src={logo}/>
            <HeroImg src={actualArt} />
    </GraphicsContainerDiv>
        
    <LogInContainerDiv>
        <StyledH1>Welcome !</StyledH1>

            {showPage === "login"
            ?<LogInForm setShowPage={setShowPage} />
            : showPage ==="signUp"
            ?<SignUpForm setShowPage={setShowPage}/>
            : null        
            }
    </LogInContainerDiv>
</GuestPageDiv>

    )
};

export default GuestPageContainer;