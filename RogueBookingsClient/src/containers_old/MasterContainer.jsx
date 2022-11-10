// import { createContext, useEffect, useReducer } from "react";
// import styled from "styled-components";
// import masterState from "../containers/MasterState";
// import HomePage from "../pages/HomePage";
// import LogInCreateAccountPage from "../pages/LogInCreateAccountPage";
// import userRepo from "../repositories/userRepo";
// import GuestPageContainer from "./GuestPageContainer";
// import UserPageContainer from "./UserPageContainer";

// export const MasterContext = createContext(null);

// const reducer = (state, action) => {
//   let nextIndex;
//   switch (action.type) {
//     case "LoadAllUsers":
//       return { ...state, AllUsers: [...action.users] };

//     case "LoadLoggedInUser":
//       return { ...state, user: { ...action.user } };

//     case "LoadMyBusinesses":
//       return { ...state, myBusinesses: [...action.businesses] };

//     case "LoadMyMemberships":
//       return { ...state, myMemberships: [...action.memberships] };

//     case "LoadMyStudyLessons":
//       return { ...state, myStudyLessons: [...action.studyLessons] };

//     case "SelectNavTab":
//       return { ...state, selectedNavTab: action.selectedNavTab };

//     case "SetNavTabType":
//       return { ...state, selectedTabType: action.tabType };

//     case "SetSelectedBusiness":
//       return { ...state, selectedBusiness: action.business };

//     case "SetSelectedBusinessMembership":
//       return { ...state, selectedBusinessMembership: action.membershipId };

//     case "SetPageColor":
//       return { ...state, pageColor: action.color };

//     case "GoNextMonth":
//       nextIndex = (state.selectedMonthIndex + 1) % state.monthList.length;
//       return {
//         ...state,
//         selectedMonth: { ...state.monthList[nextIndex] },
//         selectedMonthIndex: nextIndex,
//       };

//     case "GoPrevMonth":
//       nextIndex =
//         state.selectedMonthIndex === 0 ? 11 : state.selectedMonthIndex - 1;
//       return {
//         ...state,
//         selectedMonth: { ...state.monthList[nextIndex] },
//         selectedMonthIndex: nextIndex,
//       };

//     default:
//       return state;
//   }
// };

// const MasterContainer = () => {

//   const [state, dispatch] = useReducer(reducer, masterState);

//   useEffect(() => {
//     userRepo.getAllUsers().then((users) => {
//       dispatch({ type: "LoadAllUsers", users });
//     });
//   }, []);

//   return (
//     <MasterContext.Provider value={{ state, dispatch }}>
        
//       {/* {state.user.email ? <UserPageContainer /> : <LogInCreateAccountPage />} */}
//     </MasterContext.Provider>
//   );
// };

// export default MasterContainer;
