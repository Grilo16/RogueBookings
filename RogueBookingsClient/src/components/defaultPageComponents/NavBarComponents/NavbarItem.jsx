import { useContext, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";
import { MasterContext } from "../../../containers/MasterContainer";
import businessRepo from "../../../repositories/businessRepo";
import paths from "./svgPaths";



const NavbarItem = ({ item, id }) => {
  
  const { state, dispatch } = useContext(MasterContext);

  const handleClick = () => {
    dispatch({ type: "SelectNavTab", selectedNavTab: id });
    dispatch({ type: "SetPageColor", color: item.fill });
    dispatch({ type: "SetNavTabType", tabType: item.type });
    dispatch({ type: "SetMemberId", memberId: item.memberId });
    if (item.type === "business_owner" || item.type === "business_member") {
      businessRepo.getBusinessByBusinessId(item.businessId).then((business) => {
        dispatch({ type: "SetSelectedBusiness", business });
        dispatch({ type: "SetSelectedBusinessMembership", business });
      });
    }
  };

  const animatedProps = useSpring({
    d:
    state.selectedNavTab === id
    ? paths.openTab()
    : state.selectedNavTab - 1 === id
    ? paths.specialClosedTab()
    : paths.normalClosedTab(),
  });
  
  return (

<NavItemDiv  >
      
      
        <NavContentContainer  onClick={handleClick}  > 

              <NavItemImg 
                src="https://via.placeholder.com/69"
                alt=""
                />

              <NavH4 className="scroll-within"
              >
                {item.name} 
              </NavH4>
                {
                item.type === "business_owner"
                ?<NavLabel>Owner</NavLabel>
                :item.type === "business_member"
                ?<NavLabel>Member</NavLabel>
                :null
              }
          </NavContentContainer>
      
        <NavDivBackground viewBox="0 0 306 231">
          <animated.path d={animatedProps.d} fill={item.fill} />
        </NavDivBackground>
    </NavItemDiv>
  );
};


const NavItemDiv = styled.div`
  position: relative;
  top: 2.1vw;
  height: 6.6vw;
  margin-bottom: -0.9vw;
`;

const NavDivBackground = styled.svg`
margin-top: -8vw;
position: relative;
height: 11vw;
z-index: 0;

`
const NavContentContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr 1fr;
padding-top: 1vw;
padding-left: 2vw;
height: 4.4vw;
width: 12.5vw;
z-index: 1;

`
const NavItemImg = styled.img`
position: relative;
border-radius: 3vw;
height: 3.5vw;
width: 3.5vw;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
`
const NavH4 = styled.h4`
position: relative;
color: white;
width: 7vw;
padding: 0vw;
margin-left: 1vw;
font-size: 1vw;
overflow-x: hidden;
height: 4vw;

`;

const NavLabel = styled.p`
color: grey;
grid-column-start: 2;
margin-top: -4.6vw;
scale: 0.7;
`

export default NavbarItem;
