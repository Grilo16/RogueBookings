import { useEffect } from "react";
import { useContext } from "react";
import { MasterContext, PageContainerDiv, ViewportContainer, ViewportDisplayBackground, ViewportUserDisplay } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import HeaderComponent from "../headerComponent/HeaderComponent";
import NavbarComponent from "../navBarComponents/NavbarComponent";

const DefaultPage = (props) =>{
     const {state, dispatch} = useContext(MasterContext)


    return (
        <PageContainerDiv>
        <HeaderComponent/>
        <ViewportContainer>
        <NavbarComponent />
        <ViewportDisplayBackground backgroundColor={state.pageColor}> 


            {props.children}
        
        

        </ViewportDisplayBackground>
        </ViewportContainer>
        </PageContainerDiv>
    )
};

export default DefaultPage;