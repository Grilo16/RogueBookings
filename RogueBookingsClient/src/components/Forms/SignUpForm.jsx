import { useContext, useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import userRepo from "../../repositories/userRepo";
import InputField from "./InputField";

const SignUpForm = () => {

    const {state, dispatch} = useContext(MasterContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleUserSignUp = (e) => {
        e.preventDefault()
        const userObject = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userLayout: JSON.stringify({backgroundColor: "#4a499e"}),
        }
        userRepo.addNewUser(userObject).then((user) => {dispatch({type: "LoadLoggedInUser", user})})
    };

    return (

        <form >    
            <InputField placeholder={"First Name"} setState={setFirstName} state={firstName}/>
            <InputField placeholder={"Last Name"} setState={setLastName} state={lastName}/>
            <InputField placeholder={"Email"} setState={setEmail} state={email}/>
            <InputField placeholder={"Password"} setState={setPassword} state={password}/>
            <button onClick={handleUserSignUp}>Sign Up</button>
        </form>
    )
};

export default SignUpForm;