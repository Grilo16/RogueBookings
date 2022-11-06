import { useContext, useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import userRepo from "../../repositories/userRepo";
import ButtonComponent from "./ButtonComponent";
import InputFieldComponent from "./InputFieldComponent";

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
        //    if (!user){
        //        return
        //    }
            dispatch({type: "LoadLoggedInUser", user})
            businessRepo.getAllBusinessesByUserId(user.id).then((businesses) =>{   
                dispatch({type: "LoadMyBusinesses", businesses})
                memberRepo.getAllMembershipsByUserId(user.id).then((memberships)=>{
                    dispatch({type: "LoadMyMemberships", memberships})
                })
                
                })
            })
    };

    const handleSelectChange = (e) => {
        setUserId(e.target.value)
    };

    const handleSwapPage = () => {
        setShowPage("signUp")
        
    };

    return (
        <form >
            {/* <select onChange={handleSelectChange}>
                <option value=""></option>
           {users}
            </select>
            <br /> */}
            <InputFieldComponent placeholder={"Email"} setState={setEmail} state={email}/>
            <InputFieldComponent placeholder={"Password"} setState={setPassword} state={password} type={"password"}/>
            <ButtonComponent clickFunction={handleSwapPage} label={"Create account"} activated={false} marginLeft="1.6vw"/>
            <ButtonComponent clickFunction={handleLogIn} label={"Sign in"} activated={true} marginLeft="-0.4vw "/>
        </form>
    )
};

export default LogInForm;