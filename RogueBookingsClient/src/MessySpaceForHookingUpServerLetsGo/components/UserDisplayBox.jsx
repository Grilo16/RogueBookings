import { useContext, useEffect } from "react";
import { HolderContext } from "../HolderPage";
import styled from "styled-components";
import userRepo from "../../repositories/userRepo";

const UserDiv = styled.div.attrs(({red, blue, green})=>({
    style: {
        backgroundColor : "rgb(" + red +"," + blue + "," +green +")",
    }
}))`
  position: absolute;  
  text-align: center;
  height: 50vh;
  width: 50%;
`;

const UserDisplayBox = () => {
  const { state, dispatch, addUserToDb } = useContext(HolderContext);

  return (
    <UserDiv red={state.userLayout.backgroundColor.red} blue={state.userLayout.backgroundColor.blue} green={state.userLayout.backgroundColor.green}>

        <h1>{state.id}</h1>
        <h1>{state.firstName + state.lastName}</h1>
        <h1>{state.email}</h1>
        <button onClick={()=>addUserToDb()}>new user</button>

   

    </UserDiv>
  );
};

export default UserDisplayBox;
