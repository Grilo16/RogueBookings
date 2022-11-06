import { useContext, useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import userRepo from "../../repositories/userRepo";
import ButtonComponent from "./ButtonComponent";
import InputFieldComponent from "./InputFieldComponent";

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
        userRepo.addNewUser(userObject).then((user) => {dispatch({type: "LoadLoggedInUser", user})})
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
            <ButtonComponent clickFunction={handleUserSignUp} label={"Create account"} activated={true} marginLeft="1.5vw"/>
            <ButtonComponent clickFunction={handleSwapPage} label={"Sign in"} activated={false} marginLeft=" -0.4vw"/>
        </form>
    )
};

export default SignUpForm;