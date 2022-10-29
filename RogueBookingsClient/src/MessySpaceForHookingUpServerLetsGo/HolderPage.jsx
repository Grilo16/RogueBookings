import { createContext, useEffect, useReducer } from "react";
import UserDisplayBox from "./components/UserDisplayBox";
import userRepo from "../repositories/userRepository/userRepo";

export const HolderContext = createContext() 

const reducer = (state, action) => {
    switch(action.type){

        case "LoadUsers":
            return {...state, users:[...action.user]}

        default:
            return state
    }
};

const HolderPage = function(){

    const states = {
        users: [],
    }

    const [state, dispatch] = useReducer(reducer, states)


    useEffect(()=>{

        userRepo.getAllUsers().then((user) => {dispatch({type : "LoadUsers", user})})


    },[])


    return (
        <HolderContext.Provider value={{state, dispatch}}>
            <h1>Holder page</h1>
            <UserDisplayBox/>

            
        </HolderContext.Provider>
    )
}

export default HolderPage;