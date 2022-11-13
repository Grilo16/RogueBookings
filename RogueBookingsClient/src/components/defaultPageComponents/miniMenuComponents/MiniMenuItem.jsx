import { useContext, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";

const MenuItem = styled.h4`
  background-color: ${(props) => (props.changeColor ? "#e6e6fe" : "#ffffff")};
  height: 1.5vw;
  padding-top: 0.7vw;
  text-align: center;
  border-radius: 3vw/4.5vw;
`;

const MiniMenuItem = ({ item }) => {
  const { state, dispatch } = useContext(MasterContext);

  const handleMenuClick = (e) => {
    dispatch({ type: "SelectPage", selectedPage: item });
  };

  return (
    <>
      {state.selectedPage === item ? (
        <MenuItem onClick={handleMenuClick} changeColor={true}>
          {item}
        </MenuItem>
      ) : (
        <MenuItem onClick={handleMenuClick}>{item}</MenuItem>
      )}
    </>
  );
};

export default MiniMenuItem;
