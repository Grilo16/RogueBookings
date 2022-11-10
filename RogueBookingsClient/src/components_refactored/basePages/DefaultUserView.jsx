import { useContext } from "react";
import { MasterContext, PageContainerDiv, ViewportContainer, ViewportDisplayBackground, ViewportUserDisplay } from "../../containers/MasterContainer";
import HeaderComponent from "../headerComponent/HeaderComponent";
import NavbarComponent from "../navBarComponents/NavbarComponent";

 const DefaultUserView = (props) =>{

    
    return (
   
        <ViewportUserDisplay className="scroll-within"> 

            {props.children}
        
        

        </ViewportUserDisplay>
    )
};

export default DefaultUserView;