import { useContext } from "react";
import { MasterContext } from "./MasterContainer";
import styled from "styled-components";
import SignUpForm from "../components/Forms/SignUpForm";
import LogInForm from "../components/Forms/LogInForm";


const GuestPageDiv = styled.div`
text-align: center;
display: flex;
background-color: cyan;
height: 100vh;
width: 100vw;
position: fixed;
`

const CreateAccountDiv = styled.div`
width : 50vw;
background-color : blue;
`

const LogInDiv = styled.div`
width: 50vw;
`

const GuestPageContainer = () => {
    const {state, dispatch} = useContext(MasterContext)
 
    return (
        <GuestPageDiv>

        <CreateAccountDiv>
            <h1>Sign up</h1>
            <SignUpForm/>
            
        </CreateAccountDiv>

        <LogInDiv>
            <h1>Log in </h1>
            <LogInForm/>

        </LogInDiv>



        </GuestPageDiv>
    )
};

export default GuestPageContainer;