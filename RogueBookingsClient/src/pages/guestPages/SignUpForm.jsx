import { useContext, useState } from "react";
import ButtonComponent from "../../components/formComponents/ButtonComponent";
import InputFieldComponent from "../../components/formComponents/InputFieldComponent";
import { MasterContext } from "../../containers/MasterContainer";
import userRepo from "../../repositories/userRepo";
import { ButtonsDiv } from "./LogInForm";

const SignUpForm = ({setShowPage}) => {

    const {state, dispatch} = useContext(MasterContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleUserSignUp = (e) => {
        const userObject = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userLayout: JSON.stringify({backgroundColor: "#4a499e"}),
        }
        userRepo.addNewUser(userObject).then((user) => {
            if (!user){
                window.alert("Sorry email is taken, try again")
            }
            dispatch({type: "LoadLoggedInUser", user})})
    };

    const handleSwapPage = () => {
        setShowPage("login")
        
    };

    return (

        <form >    
            <InputFieldComponent placeholder={"First Name"} setState={setFirstName} state={firstName}/>
            <InputFieldComponent placeholder={"Last Name"} setState={setLastName} state={lastName}/>
            <InputFieldComponent placeholder={"Email"} setState={setEmail} state={email}/>
            <InputFieldComponent placeholder={"Password"} setState={setPassword} state={password} type={"password"}/>
<ButtonsDiv>

            <ButtonComponent clickFunction={handleUserSignUp} label={"Create account"} activated={true} paddingRight={"2vw"} paddingLeft={"2vw"}/>
            <ButtonComponent clickFunction={handleSwapPage} label={"Sign in"} activated={false} paddingRight={"2vw"} paddingLeft={"2vw"}/>
</ButtonsDiv>
        </form>
    )
};

export default SignUpForm;