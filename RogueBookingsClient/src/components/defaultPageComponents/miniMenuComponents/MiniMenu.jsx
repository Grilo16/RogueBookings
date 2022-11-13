import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MasterContext } from "../../../containers/MasterContainer";
import businessRepo from "../../../repositories/businessRepo";
import memberRepo from "../../../repositories/memberRepo";
import userRepo from "../../../repositories/userRepo";
import ButtonComponent from "../../formComponents/ButtonComponent";
import MiniMenuItem from "./MiniMenuItem";

const MiniMenu = () => {
  const { state, dispatch } = useContext(MasterContext);

  const ownerMenu = [
    "Schedule",
    "Teachers",
    "Students",
    "Revenue",
    "Settings",
  ].map((item, index) => {
    return <MiniMenuItem item={item} key={index} />;
  });

  const memberMenu = ["Schedule", "Teachers", "Students", "Settings"].map(
    (item, index) => {
      return <MiniMenuItem item={item} key={index} />;
    }
  );

  const handleLeaveBusiness = () => {
    memberRepo.removeMemberFromBusinessByMembersId(state.memberId);
    dispatch({ type: "SetNavTabType", tabType: "dashboard" });
    dispatch({ type: "SelectNavTab", selectedNavTab: 0 });
    dispatch({ type: "SetPageColor", color: "#4a499e" });
  };

  const handleCloseBusiness = () => {
    businessRepo.deleteBusinessById(state.selectedBusiness.id);
    dispatch({ type: "SetNavTabType", tabType: "dashboard" });
    dispatch({ type: "SelectNavTab", selectedNavTab: 0 });
    dispatch({ type: "SetPageColor", color: "#4a499e" });
  };

  return (
    <DisplayMenuDiv className="scroll-within">
      <MenuTitleDiv>
        <MenuImg src="https://via.placeholder.com/70" />
        <h3>{state.selectedBusiness.name}</h3>
        {state.selectedTabType === "business_owner" ? (
          <p style={{ fontSize: "0.5vw", marginTop: "-1vw" }}>Owner</p>
        ) : null}
      </MenuTitleDiv>

      <MenuContentDiv>
        {state.selectedTabType === "business_owner"
          ? ownerMenu
          : state.selectedTabType === "business_member"
          ? memberMenu
          : null}
      </MenuContentDiv>
      {state.selectedTabType === "business_owner" ? (
        <ButtonComponent
          newColor={"#9291c5"}
          label={"Close business"}
          width={"min-content"}
          marginLeft={"0.2vw"}
          height={"2.5vw"}
          marginTop={"17vw"}
          fontSize={"0.9vw"}
          selectedId={state.selectedBusiness.id}
          clickFunction={handleCloseBusiness}
        />
      ) : (
        <ButtonComponent
          newColor={"#9291c5"}
          label={"Leave"}
          width={"max-content"}
          marginLeft={"1.8vw"}
          height={"2.5vw"}
          marginTop={"17vw"}
          fontSize={"1vw"}
          selectedId={state.selectedBusiness.id}
          clickFunction={handleLeaveBusiness}
        />
      )}
    </DisplayMenuDiv>
  );
};

export default MiniMenu;

const DisplayMenuDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 1.5vw;
  overflow: scroll;
  height: 100%;
  width: 15%;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const MenuImg = styled.img`
  border-radius: 10vw;
  box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.1);
`;

const MenuTitleDiv = styled.div`
  text-align: center;
  margin-top: 5vw;
`;

const MenuContentDiv = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1.5vw;
  margin-bottom: -5vw;
  height: max-content;
`;
