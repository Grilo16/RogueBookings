import { useContext, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";
import svgPaths from "./svgPaths";
import { MasterContext } from "../../../containers/MasterContainer";
import { UserContext } from "../../../containers/UserPageContainer";
import businessRepo from "../../../repositories/businessRepo";

const NavLi = styled.li`
  position: absolute;
  top: ${(props) => props.position}px;
  margin-top: -1%;
  min-width: 15.2vw;
  max-width: 15.2vw;
  z-index: ${(props) => props.zIndex};
`;

const LiDiv = styled.div`
  display: flex;
  margin-top: -14.2vh;
  margin-left: 2vw;
`;

const LiText = styled.h4`
  position: relative;
  color: white;
  width: 7vw;
  height: 7vh;
  font-size: 1vw;
  margin-left: 1vw;
  overflow-x: hidden;
  z-index: ${(props) => props.id + props.maxIndex};
`;

const NavbarItem = ({ item, zIndex, maxIndex, position, id }) => {
  const { state, dispatch } = useContext(MasterContext);

  const handleClick = () => {
    dispatch({ type: "SelectNavTab", selectedNavTab: id });
    dispatch({ type: "SetPageColor", color: item.fill });
    dispatch({ type: "SetNavTabType", tabType: item.type });
    if (item.type === "business"){
      businessRepo.getBusinessByBusinessId(item.businessId).then((business)=>{
        dispatch({type: "SetSelectedBusiness", business})
      })
    }
    
  };

  const animatedProps = useSpring({
    d:
      state.selectedNavTab === id
        ? svgPaths.openTab()
        : state.selectedNavTab - 1 === id
        ? svgPaths.specialClosedTab()
        : svgPaths.normalClosedTab(),
  });

  return (
    <NavLi zIndex={zIndex} position={position}>
      <svg viewBox="0 0 306 231">
        <animated.path d={animatedProps.d} fill={item.fill} />
      </svg>
      <LiDiv>
        <img
          src="https://via.placeholder.com/69"
          alt=""
          style={{ height: "69px", borderRadius: "50%" }}
        />

        <LiText
          onClick={handleClick}
          maxIndex={maxIndex}
          id={id}
          zIndex={zIndex}
        >
          {item.name}
        </LiText>
      </LiDiv>
    </NavLi>
  );
};

export default NavbarItem;
