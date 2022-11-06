import { useContext, useState } from "react";
import userRepo from "../../repositories/userRepo";
import { HolderContext } from "../MasterContainer";

const AddNewUserForm = () => {

    const {state, dispatch} = useContext(HolderContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");


    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }


    const addUserToDb = (e)=>{
        e.preventDefault()
        const user = {
            firstName : firstName,
            lastName : lastName,
            email: email,
            userLayout: JSON.stringify(state.selectedUser.userLayout)
        }
        
            userRepo.addNewUser(user).then((user)=>{ dispatch({type: "LoadSelectedUser", user})}).then(()=>{
                userRepo.getAllUsers().then((users)=>{ dispatch({type: "LoadAllUsers", users})})
            })
        }
    
    
    

    return (
        <form>
            <input placeholder="first name" onChange={handleFirstName} type="text" value={firstName} />
            <input placeholder="last name" onChange={handleLastName} type="text" value={lastName} />
            <input placeholder="email@email.com" onChange={handleEmail} type="text" value={email} />

            <button onClick={addUserToDb}>new user</button>


        </form>
    )
}; 

export default AddNewUserForm;