import { useContext, useState } from "react";
import { MasterContext } from "./MasterContainer";
import styled from "styled-components";
import SignUpForm from "../components/Forms/SignUpForm";
import LogInForm from "../components/Forms/LogInForm";
import logo from "../images/Logo.png"
import placeholderArt from "../images/placeholderArt.png"


const GuestPageDiv = styled.div`
text-align: center;
display: flex;
background-image: linear-gradient(to bottom right, #5e5ea2, #7d7dd5 , #8f8fd3, #d4d4f0);
height: 100vh;
width: 100vw;
position: fixed;
`

const LogInContainer = styled.div`
margin-top: 10vh;
color: white;
width: 40vw;
`


const CreateAccountDiv = styled.div`

`

const LogInDiv = styled.div`
`

const GraphicsDiv = styled.div`
background-color: white;
height: 100vh;
width: 60vw;
`

const StyledH1 = styled.h1`
font-size: 5vw;
font-weight: lighter;
margin-bottom: 10vh;
`

const GuestHeaderDiv = styled.div`
margin-top: 0px;
height: 15vh;
padding: 1px;
`


const GuestPageContainer = () => {
    const {state, dispatch} = useContext(MasterContext)
 
    const [showPage, setShowPage] = useState("login")


    return (
        <GuestPageDiv>
    <GraphicsDiv>
        <GuestHeaderDiv> 
                <img src={logo} alt="" height="100" style={{marginLeft: "-42vw"}}/>
        </GuestHeaderDiv>
        <div>
            <img src={placeholderArt} height="690" alt="" style={{marginTop: "-6.2vh"}}/>
        </div>
        
    </GraphicsDiv>
    <LogInContainer>
        <StyledH1>Welcome !</StyledH1>

        {showPage === "login"
        ? <LogInDiv>
            <LogInForm setShowPage={setShowPage} />
         </LogInDiv>
        : showPage ==="signUp"
        ?<CreateAccountDiv>
            <SignUpForm setShowPage={setShowPage}/>
            
        </CreateAccountDiv>
        : null        
    }
    </LogInContainer>




        </GuestPageDiv>
    )
};

export default GuestPageContainer;