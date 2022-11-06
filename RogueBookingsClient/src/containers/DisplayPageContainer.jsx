import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "./MasterContainer";
import BusinessBrowser from "../components/BusinessBrowser";
import UserDashboard from "../components/UserDashboard";
import BusinessPage from "../components/BusinessPage";


const DisplayDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.backgroundColor};
  min-height: 100vh;
  max-height: 100vh;
  min-width: 84.8vw; 
  max-width: 84.8vw;
  font-size: 1.2vw;
  transition: background-color 0.5s ease;
  color: black;
  right: 0vw;
`;

export const ContentDiv = styled.div`
position: absolute;
right: 50vw;
top: ${(props)=> props.top ? props.top : "6.9vh"};
left: ${(props)=> props.left ? props.left : "1.2vw"};
height: ${(props)=> props.height ? props.height : "90vh"};
width:  ${(props)=> props.width ? props.width : "82.5vw"};
border-radius: 5vh;
background-color: grey;
text-align: center;
overflow-y: scroll;
`

const DisplayPageContainer = () => {
  
  

  const { state, dispatch } = useContext(MasterContext);

  
  return (
    <DisplayDiv backgroundColor={state.pageColor}>
      {state.selectedTabType === "dashboard"
      ? <UserDashboard/>
      : state.selectedTabType === "join-business"
      ? <BusinessBrowser/>
      : state.selectedTabType === "business"
      ? <BusinessPage/>
      : null
      }
      
      
    </DisplayDiv>
  );
};

export default DisplayPageContainer;
