import { useContext, useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import userRepo from "../../repositories/userRepo";

const LogInForm = () => {

    const [userId, setUserId] = useState()  

    const {state, dispatch} = useContext(MasterContext)
    const users = state.AllUsers.map((user) => {
        return (
            <option key={user.id} value={user.id} >{user.email}</option>
        )
    })

    const handleLogIn = (e) => {
        e.preventDefault()
        userRepo.getUserById(userId).then((user)=>{
            dispatch({type: "LoadLoggedInUser", user})
            businessRepo.getAllBusinessesByUserId(userId).then((businesses) =>{
                dispatch({type: "LoadMyBusinesses", businesses})
                memberRepo.getAllMembershipsByUserId(userId).then((memberships)=>{
                    dispatch({type: "LoadMyMemberships", memberships})
                })
                
                })
            })
    };

    const handleSelectChange = (e) => {
        setUserId(e.target.value)
    };

    return (
        <form >
            <select onChange={handleSelectChange}>
                <option value=""></option>
           {users}

            </select>
            <br />
            <button onClick={handleLogIn}>Log in</button>
        </form>
    )
};

export default LogInForm;