import { createContext, useEffect, useReducer } from "react"
import userRepo from "../repositories/userRepo";
import UserDisplayBox from "./components/UserDisplayBox"

export const HolderContext = createContext(null)


const reducer = (state, action)=>{



    switch(action.type){
        case "LoadData":
            return {...state, data:[action.data]}

        case "LoadMoreData":
            return {...state, newState:["something"]}

        case "LoadAllUsers":
            return {...state, users:[action.user]}

        case "AddToGreen": 
            return {...state, green: state.green + 10}

        default: 
            return state
    }

};


const HolderPage = ()=> {

    const states = {
        data: [],
        red: 100,
        blue : 100,
        green : 1,
    }
    const [state, dispatch] = useReducer(reducer, states)
    
useEffect(()=>{
 
    userRepo.getAllUsers().then((users)=>{ dispatch({type: "LoadAllUsers", users})})
    userRepo.editUserById()
    const a = {a: 1}
   
    dispatch({type : "LoadData", data: a })
    dispatch({type : "LoadMoreData"})

}, [])




    return (
        <HolderContext.Provider value={{state, dispatch}}>
            <UserDisplayBox/>


        </HolderContext.Provider>
    )
}
export default HolderPage