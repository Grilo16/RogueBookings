import { createContext, useEffect, useReducer } from "react"
import styled from "styled-components";
import MyBookingsContainer from "./components/myBookings/MyBookingsContainer";
import DisplayPage from "../components/Pages/DisplayPage";
import Navbar from "./components/navBar/NavbarContainer";
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
        
        case "SetPageColor":
            return {...state, pageColor: action.color}
        
        case "SetPageTitle":

            return {...state, pageTitle: action.title}


        case "SetSelectedTab":
            return {...state, selectedTab: action.tabSelected}
        default: 
            return state
    }

};


const MainDisplayContainerDiv = styled.div`
display: flex
`


const HolderPage = ()=> {

    const userId = 1
    const states = {
        selectedTab: 0,
        pageTitle: "home", 
        pageColor: "#4a499e",
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
 
    // userRepo.getUserById(userId).then((user)=>{ dispatch({type: "LoadSelectedUser", user})})
    // userRepo.getAllUsers().then((users)=>{ dispatch({type: "LoadAllUsers", users})})
    
}, [])


    return (
        <HolderContext.Provider value={{state, dispatch}}>
            
            <MainDisplayContainerDiv>

            <Navbar/>
            <DisplayPage/>
            
                
            </MainDisplayContainerDiv>
            
            {/* <div>
            <PageEditor/>
            </div>
            <div>
            <UserDisplayBox/>
            </div> */}

    
       </HolderContext.Provider>
    )
}
export default HolderPage