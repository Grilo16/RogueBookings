import { useContext, useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../../components/formComponents/ButtonComponent";
import InputFieldComponent from "../../components/formComponents/InputFieldComponent";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import localStorageRepo from "../../repositories/localStorageRepo";
import memberRepo from "../../repositories/memberRepo";
import userRepo from "../../repositories/userRepo";

const LogInForm = ({setShowPage}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState()  

    const {state, dispatch} = useContext(MasterContext)
    const users = state.AllUsers.map((user) => {
        return (
            <option key={user.id} value={user.id} >{user.email}</option>
        )
    })

    const handleLogIn = (e) => {
       const user =  userRepo.getUserByEmail(email).then((user)=>{
           if (!user){
               return window.alert("Sorry email or password incorrect")
           }
            dispatch({type: "LoadLoggedInUser", user})
            localStorageRepo.logIn(user)
            // businessRepo.getAllBusinessesByUserId(user.id).then((businesses) =>{
            //     dispatch({type: "LoadMyBusinesses", businesses})
            //     memberRepo.getAllMembershipsByUserId(user.id).then((memberships)=>{
            //         dispatch({type: "LoadMyMemberships", memberships})
            //     })
                
            //     })
            })
    };

    const handleEnterLogin = (e) => {
        e.preventDefault()
        handleLogIn()
    }

    const handleSelectChange = (e) => {
        setUserId(e.target.value)
    };

    const handleSwapPage = () => {
        setShowPage("signUp")
        
    };
    

    return (
        <form >
            <InputFieldComponent placeholder={"Email"} setState={setEmail} state={email}/>
            <InputFieldComponent placeholder={"Password"} setState={setPassword} state={password} type={"password"}/>
            <button hidden type="submit" onClick={handleEnterLogin}/>
            <ButtonsDiv>
            <ButtonComponent clickFunction={handleSwapPage} label={"Create account"} activated={false}   paddingRight={"2vw"} paddingLeft={"2vw"}/>
            <ButtonComponent clickFunction={handleLogIn} label={"Sign in"} activated={true} paddingRight={"2vw"} paddingLeft={"2vw"}/>
            </ButtonsDiv>
            {/* <select onChange={handleSelectChange}>
                <option value=""></option>
           {users}
            </select>
            <br /> */}
        </form>
    )
};


export const ButtonsDiv = styled.div`
display: flex;
justify-content: space-between;
width: 23.25vw;
margin-left: 13.4vw;

`

export default LogInForm;