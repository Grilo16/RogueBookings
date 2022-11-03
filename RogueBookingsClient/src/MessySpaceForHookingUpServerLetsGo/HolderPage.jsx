import { createContext, useEffect, useReducer } from "react"
import userRepo from "../repositories/userRepo";
import UserDisplayBox from "./components/UserDisplayBox"

export const HolderContext = createContext(null)


const reducer = (state, action)=>{



    switch(action.type){
        case "LoadUserById":
            return {...state, ...action.user}
        default: 
            return state
    }

};

const HolderPage = ()=> {

    const userId = 5
    const states = {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        userLayout: {backgroundColor: {blue: 0, green: 0, red: 0}}
    }
    const [state, dispatch] = useReducer(reducer, states)
    
useEffect(()=>{
 
    userRepo.getUserById(userId).then((user)=>{ dispatch({type: "LoadUserById", user})})
    
}, [])

const addUserToDb = ()=>{
    const user = {
        firstName : "with stringfy",
        lastName : "Yeeah",
        email: "sfasdf@7qasdfasdfeasdqwe.com",
        userLayout: JSON.stringify({"backgroundColor": {"red": 110, "blue": 150, "green": 100}})
    }
    
        userRepo.addNewUser(user).then((user)=>{ dispatch({type: "LoadUserById", user})})
    }


    return (
        <HolderContext.Provider value={{state, dispatch, addUserToDb}}>
            <UserDisplayBox/>
            


        </HolderContext.Provider>
    )
}
export default HolderPage