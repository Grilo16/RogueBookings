import { createContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import UserHomePage from "../pages/UserHomePage";
import LogInCreateAccountPage from "../pages/guestPages/LogInCreateAccountPage";
import userRepo from "../repositories/userRepo";
import reducer from "./MasterReducer";
import masterState from "./MasterState";
import DefaultPage from "../components/defaultPageComponents/DefaultPage";
import BusinessRoutingPage from "../pages/businessPages/BusinessRoutingPage";
import CreateBusinessPage from "../pages/businessPages/SubPages/createJoin/CreateBusinessPage";
import JoinBusinessPage from "../pages/businessPages/SubPages/createJoin/JoinBusinessPage";
import ErrorPage from "../pages/ErrorPage";

export const MasterContext = createContext(null);

const MasterContainer = () => {

  const [state, dispatch] = useReducer(reducer, masterState);


 

  
  return (
    <MasterContext.Provider value={{ state, dispatch }}>
      {!state.user.email 
        ? <LogInCreateAccountPage />
        : <DefaultPage>
        {
          state.selectedTabType ==="dashboard"  
         ? <UserHomePage/>
         :  state.selectedTabType === "business_owner" || state.selectedTabType  === "business_member"
         ? <BusinessRoutingPage/>
         :  state.selectedTabType === "create-business" 
         ? <CreateBusinessPage/>
         : state.selectedTabType === "join-business"
         ? <JoinBusinessPage/>
         : <ErrorPage/>
        }

          
        </DefaultPage>


         
        //  </DefaultPage>
      }
      
{/* 
      {!state.user.email 
      : state.selectedTabType ==="dashboard"  
      ? <UserHomePage/>
      : state.selectedTabType === "business" 
      ? <Maybe/> 
      : <UserHomePage/>
    } */}
      {
        // ? 
        // : state.selectedTabType === "business"
        // ? <BusinessDisplayPage/>
        // : state.selectedTabType === "join-business"
        // ? <BusinessBrowser/>
        // : state.selectedTabType === "create-business"
        // ?<CreateBusinessPage/>
        // :null
        }

    </MasterContext.Provider>
  );
};

export const ContentDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: ${(props)=>props.marginTop? props.marginTop : "0%"};

`

export default MasterContainer;
