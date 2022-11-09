import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "./MasterContainer";
import BusinessBrowser from "../components/BusinessBrowser";
import UserDashboard from "../components/UserDashboard";
import BusinessPage from "../components/BusinessPages/BusinessPage";
import CreateBusinessPage from "../components/BusinessPages/CreateBusinessPage";


const DisplayContainerDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: black;
  height: 100vh;
  width: 84.8vw; 
  padding-left: 1.4vw;
  transition: background-color 0.5s ease;
`;



const DisplayPageContainer = () => {
  
  

  const { state, dispatch } = useContext(MasterContext);

  
  return (
    <DisplayContainerDiv backgroundColor={state.pageColor}>
      {state.selectedTabType === "dashboard"
      ? <UserDashboard/>
      : state.selectedTabType === "join-business"
      ? <BusinessBrowser/>
      : state.selectedTabType === "business"
      ? <BusinessPage/>
      : state.selectedTabType === "create-business"
      ?<CreateBusinessPage/>
      :null
      }
    </DisplayContainerDiv>
  );
};

export default DisplayPageContainer;
