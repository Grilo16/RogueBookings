import { createContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import HomePage from "../pages/UserHomePage";
import LogInCreateAccountPage from "../pages/LogInCreateAccountPage";
import userRepo from "../repositories/userRepo";
import reducer from "./MasterReducer";
import masterState from "./MasterState";

export const MasterContext = createContext(null);

const MasterContainer = () => {

  const [state, dispatch] = useReducer(reducer, masterState);


  useEffect(() => {
    userRepo.getAllUsers().then((users) => {
      dispatch({ type: "LoadAllUsers", users });
    });
  }, []);



  return (
    <MasterContext.Provider value={{ state, dispatch }}>
      {state.user.email ? <HomePage /> : <LogInCreateAccountPage />}
    </MasterContext.Provider>
  );
};

export const PageContainerDiv = styled.div`
height: 100vh;
width: 100vw;
overflow hidden;
`

export const ViewportContainer = styled.div`
position: relative;
background-color: grey;
display: flex;
height: 100%;

`
export const ViewportDisplayBackground = styled.div`
background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#4a499e"};
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
transition: background-color 0.5s ease;

`
export const ViewportUserDisplay= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
width : 98%;
height: 93%;
margin-bottom: 2.3vw;
border-radius: 2vw;
overflow-y: scroll;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);

`

export const ViewportBusinessDisplay= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
width : 98%;
height: 93%;
margin-bottom: 2.3vw;
border-radius: 2vw;
overflow-y: scroll;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
`

export default MasterContainer;
