import { createContext, useEffect, useReducer } from "react";
import UserDisplayBox from "./components/UserDisplayBox";
import userRepo from "../repositories/userRepo";
import businessRepo from "../repositories/businessRepo";
import lessonRepo from "../repositories/lessonRepo";
import memberRepo from "../repositories/memberRepo";
import ownerRepo from "../repositories/ownerRepo";
import studentRepo from "../repositories/studentRepo";
import teacherRepo from "../repositories/teacherRepo";

export const HolderContext = createContext() 

const reducer = (state, action) => {
    switch(action.type){

        case "LoadData":
            return {...state, data:[...action.data]}

        default:
            return state
    }
};

const HolderPage = function(){

    const states = {
        data: [],
    }

    const [state, dispatch] = useReducer(reducer, states)


    useEffect(()=>{

        // businessRepo.getAllBusinesss().then((data) => {dispatch({type: "LoadData", data})})
        // lessonRepo.getAllLessons().then((data) => {dispatch({type: "LoadData", data})})
        // memberRepo.getAllMembers().then((data) => {dispatch({type: "LoadData", data})})
        // ownerRepo.getAllOwners().then((data) => {dispatch({type: "LoadData", data})})
        // studentRepo.getAllStudents().then((data) => {dispatch({type: "LoadData", data})})
        // teacherRepo.getAllTeachers().then((data) => {dispatch({type: "LoadData", data})})
        // userRepo.getAllUsers().then((data) => {dispatch({type : "LoadData", data})})

    },[])


    return (
        <HolderContext.Provider value={{state, dispatch}}>
            <h1>Holder page</h1>
        </HolderContext.Provider>
    )
}

export default HolderPage;