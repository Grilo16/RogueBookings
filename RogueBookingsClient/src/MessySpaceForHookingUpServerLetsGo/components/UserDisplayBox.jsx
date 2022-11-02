import { useContext } from "react";
import { HolderContext } from "../HolderPage";
import styled from "styled-components";

const UserDiv = styled.div.attrs(({red, blue, green})=>({
    style: {
        background : `rgb(${red},${blue},${green})`,
        left : green
    }
}))`
  position: absolute;  
  text-align: center;
  height: 50vh;
  width: 50%;
`;

const UserDisplayBox = () => {
  const { state, dispatch } = useContext(HolderContext);

  return (
    <UserDiv red={state.red} blue={state.blue} green={state.green}>
      <h2>user will be here</h2>
      <button onClick={()=>{dispatch({type: "AddToGreen"})}}> add to green</button>

    </UserDiv>
  );
};

export default UserDisplayBox;
