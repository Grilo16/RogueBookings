import { createContext, useEffect, useReducer } from "react";
import userRepo from "../repositories/userRepo"
import GuestPageContainer from "./GuestPageContainer";
import UserPageContainer from "./UserPageContainer";

export const MasterContext = createContext(null)

const reducer = (state, action) => {
    switch(action.type){

        case "LoadAllUsers": 
            return {...state, AllUsers: [...action.users]}

        case "LoadLoggedInUser":
            return {...state, user: {...action.user}}

        case "LoadMyBusinesses":
            return {...state, myBusinesses:[...action.businesses] }

        case "LoadMyMemberships":
            return {...state, myMemberships:[...action.memberships] }

        case "LoadMyStudyLessons":
            return {...state, myStudyLessons: [...action.studyLessons]}

        case "SelectNavTab": 
            return {...state, selectedNavTab: action.selectedNavTab}

        case "SetNavTabType": 
            return {...state, selectedTabType: action.tabType }
        
        case "SetSelectedBusiness": 
            return {...state, selectedBusiness: action.business}
        
        case "SetSelectedBusinessMembership": 
            return {...state, selectedBusinessMembership: action.membershipId}


        case "SetPageColor":
            return {...state, pageColor: action.color}

        default:
            return state
    }
};

const MasterContainer = () => {

    const initialState = {
        AllUsers : [],
        selectedNavTab: 0,
        selectedTabType: "dashboard", 
        pageColor: "#4a499e",
        selectedBusiness: {id: null, name: null, balance: null ,members:[], lessons:[], owners:[]},
        selectedBusinessMembership : {id: null, business:{}, user:{}},
        user: {
            id: null,
            firstName: null,
            lastName: null,
            email: null,
            userLayout: {backgroundColor: "#ffffff"}
            },
        myBusinesses: [],
        myMemberships: [], 
        myStudyLessons: [], 
     
        }

        
        
        const [state, dispatch] = useReducer(reducer, initialState)
        
        
        useEffect(()=>{
            userRepo.getAllUsers().then((users)=>{dispatch({type: "LoadAllUsers", users})})
            
        },[])
        

    return (
        <MasterContext.Provider value={{state, dispatch}} >
        {state.user.email
        ?<UserPageContainer/>
        :<GuestPageContainer/>
        }
        </MasterContext.Provider>
    )

};

export default MasterContainer;