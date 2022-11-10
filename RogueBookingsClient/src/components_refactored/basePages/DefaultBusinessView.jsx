import { BusinessFlexContainer, PageContainerDiv, ViewportBusinessDisplay, ViewportContainer, ViewportDisplayBackground } from "../../containers/MasterContainer";
import MiniMenu from "../miniMenuComponents/MiniMenu";

const DefaultBusinessView = (props) =>{

    
    return (
      
        <BusinessFlexContainer>
        <MiniMenu className="scroll-within"/>
        <ViewportBusinessDisplay className="scroll-within"> 

            {props.children}
        

        </ViewportBusinessDisplay>
        </BusinessFlexContainer>
     
    )
};



export default DefaultBusinessView;