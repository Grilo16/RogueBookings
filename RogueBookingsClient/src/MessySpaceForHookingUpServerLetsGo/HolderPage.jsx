import { createContext, useEffect, useReducer } from "react"
import userRepo from "../repositories/userRepo";
import PageEditor from "./components/PageEditor";
import UserDisplayBox from "./components/UserDisplayBox"

export const HolderContext = createContext(null)


const reducer = (state, action)=>{



    switch(action.type){

        case "LoadAllUsers":
            return {...state, allUsers: [...action.users]}
        case "LoadSelectedUser":
            return {...state, selectedUser : {...action.user}}
       
        case "ChangeBackgroundColor":
            return {...state, selectedUser: {...state.selectedUser, userLayout: {...state.userLayout, backgroundColor: action.color}}  }      
        default: 
            return state
    }

};

const HolderPage = ()=> {

    const userId = 1
    const states = {
        allUsers: [],
        selectedUser: {
            id: null,
            firstName: null,
            lastName: null,
            email: null,
            userLayout: {backgroundColor: "#ffffff"}
            }
        }
    const [state, dispatch] = useReducer(reducer, states)
    
useEffect(()=>{
 
    userRepo.getUserById(userId).then((user)=>{ dispatch({type: "LoadSelectedUser", user})})
    userRepo.getAllUsers().then((users)=>{ dispatch({type: "LoadAllUsers", users})})
    
}, [])


    return (
        <HolderContext.Provider value={{state, dispatch}}>
            <div>
            <PageEditor/>
            </div>
            <div>
            <UserDisplayBox/>
            </div>


            


        </HolderContext.Provider>
    )
}
export default HolderPage