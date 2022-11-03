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

    const userId = 2
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
        firstName : "IT DIIID",
        lastName : "Yeeah",
        email: "sfasdf@gmaASDaaafilasd.com",
        userLayout: '{"backgroundColor": {"red": 100, "blue": 50, "green": 255}}'
    }
    
        userRepo.addNewUser(user)
    }


    return (
        <HolderContext.Provider value={{state, dispatch, addUserToDb}}>
            <UserDisplayBox/>
            


        </HolderContext.Provider>
    )
}
export default HolderPage