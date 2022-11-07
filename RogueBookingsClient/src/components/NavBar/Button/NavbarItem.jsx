import { useContext, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";
import svgPaths from "./svgPaths";
import { MasterContext } from "../../../containers/MasterContainer";
import { UserContext } from "../../../containers/UserPageContainer";
import businessRepo from "../../../repositories/businessRepo";

const NavItemDiv = styled.div`
  position: relative;
  top: 2.1vw;
  height: 6.6vw;
  margin-bottom: -0.9vw;
  margin-left: -0.4vw;
  z-index: 0;
`;

const NavDivBackground = styled.svg`
position: relative;
top: -3vw;
height: 11.3vw;
width: 15.18vw;
z-index: 0;
`
const NavContentContainer = styled.div`
display: flex;
position: relative;
margin-top: -11.7vw;
padding-top: 1vw;
padding-left: 2vw;
height: 4.4vw;
width: 13vw;
z-index: 1;
`
const NavItemImg = styled.img`
position: relative;
border-radius: 3vw;
height: 3.5vw;
width: 3.5vw;
z-index: 2;

`
const NavH4 = styled.h4`
position: relative;
color: white;
width: 7vw;
padding: 0vw;
margin-left: 1vw;
font-size: 1vw;
overflow-x: hidden;
z-index: 3;
`;

const NavbarItem = ({ item, id }) => {
  const { state, dispatch } = useContext(MasterContext);

  const handleClick = () => {
    dispatch({ type: "SelectNavTab", selectedNavTab: id });
    dispatch({ type: "SetPageColor", color: item.fill });
    dispatch({ type: "SetNavTabType", tabType: item.type });
    if (item.type === "business") {
      businessRepo.getBusinessByBusinessId(item.businessId).then((business) => {
        dispatch({ type: "SetSelectedBusiness", business });
      });
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
    <NavItemDiv  >
      
        <NavDivBackground viewBox="0 0 306 231">
          <animated.path d={animatedProps.d} fill={item.fill} />
        </NavDivBackground>
      
        <NavContentContainer  onClick={handleClick}  > 

              <NavItemImg 
                src="https://via.placeholder.com/69"
                alt=""
                onClick={handleClick}
                />

              <NavH4
                onClick={handleClick}
              >
                {item.name}
              </NavH4>
          </NavContentContainer>
      
    </NavItemDiv>
  );
};

export default NavbarItem;