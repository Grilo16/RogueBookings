import { useEffect } from "react";
import { useContext } from "react";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavBarComponents/NavbarComponent";
import styled from "styled-components";
import { MasterContext } from "../../containers/MasterContainer";
import MiniMenu from "./miniMenuComponents/MiniMenu";

const DefaultPage = (props) => {
  const { state, dispatch } = useContext(MasterContext);

  // header = true;
  //   header = false;
  // navBar = true;
  //   navBar = false;
  // miniMenu = true;
  //   miniMenu = false;

  return (
    <PageContainerDiv>
      {props.noHeader ? null : <HeaderComponent />}

      <ViewportFlexContainer header={props.noHeader}>
        {props.noNavBar ? null : <NavbarComponent />}

        <ViewportDisplayBackground backgroundColor={state.pageColor}>
          {(state.selectedPage === "Schedule" ||
            state.selectedPage === "Teachers" ||
            state.selectedPage === "Students" ||
            state.selectedPage === "Revenue" ||
            state.selectedPage === "Settings") &&
          (state.selectedTabType === "business_owner" ||
           state.selectedTabType === "business_member")? (
            <MiniMenu />
          ) : null}

          <ViewportDisplay className="scroll-within">
            {props.children}
          </ViewportDisplay>


        </ViewportDisplayBackground>
      </ViewportFlexContainer>
    </PageContainerDiv>
  );
};

export default DefaultPage;

export const PageContainerDiv = styled.div`
height: 100vh;
width: 100vw;
overflow hidden;
`;

export const ViewportFlexContainer = styled.div`
  position: relative;
  background-color: grey;
  display: flex;
  height: ${(props) => (props.noHeader ? "100%" : "95.65%")};
  width: 100%;
`;

export const ViewportDisplayBackground = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#4a499e"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96.%;
  gap: 1%;
  padding: 1%;
  transition: background-color 0.5s ease;
`;
export const ViewportDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  overflow-y: scroll;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
`;
