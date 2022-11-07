import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "./MasterContainer";
import BusinessBrowser from "../components/BusinessBrowser";
import UserDashboard from "../components/UserDashboard";
import BusinessPage from "../components/BusinessPage";


const DisplayContainerDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: black;
  height: 100vh;
  width: 84.8vw; 
  padding-left: 1.4vw;
  transition: background-color 0.5s ease;
`;

export const MenuDiv = styled.div`
background-color: white; 

`

export const ContentDiv = styled.div`
margin-top: 3.5vw;
margin-right: 1vw;
height: ${(props)=> props.height ? props.height : "90vh"};
width:  ${(props)=> props.width ? props.width : "82.5vw"};
border-radius: 1.5vw;
background-color: white;
text-align: center;
overflow-y: scroll;
`

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
      : null
      }
      
      
    </DisplayContainerDiv>
  );
};

export default DisplayPageContainer;
