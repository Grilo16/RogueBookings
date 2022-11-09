import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../../containers/MasterContainer";
import ButtonComponent from "../Forms/ButtonComponent";

const SpecialHoverButton = ({navItems}) => {

const [showButton, setShowButton] = useState(false)
 
const {state, dispatch} = useContext(MasterContext)

const handleClick = ()=>{
    setShowButton(!showButton)
};


    const handleGoJoinBusinessPage = (selectedId) => {
        dispatch({ type: "SelectNavTab", selectedNavTab: navItems.length + 1 });
        dispatch({ type: "SetPageColor", color: "#7775c9" });
        dispatch({ type: "SetNavTabType", tabType: "join-business" });
        
    }

    const handleGoCreateBusinessPage = (selectedId) => {
        dispatch({ type: "SelectNavTab", selectedNavTab: navItems.length + 1 });
        dispatch({ type: "SetPageColor", color: "#7775c9" });
        dispatch({ type: "SetNavTabType", tabType: "create-business" });
        
    }

    return (
        <HoverButtonDiv>  

        <ButtonComponent selectedId={"join-business"} newColor={"#9594dc"} marginTop={"2.5vw"} marginLeft={"6vw"} label={"+"} fontSize={"2vw"} paddingtop={"0.5vw"} paddingBottom={"2.5vw"} borderRadius={"50vw"} height={"2vw"} width={"1vw"} paddingLeft={"1vw"} paddingRight={"2vw"} clickFunction={handleClick} />
    
        <FloatButtonDiv  showButton={showButton} >
    <ButtonComponent newColor={"#5b5ac4"} height={"2.2vw"} paddingLeft={"1.2vw"} paddingRight={"1vw"} marginLeft={"1.8vw"} label={"join"} clickFunction={handleGoJoinBusinessPage} />
    <ButtonComponent newColor={"#5b5ac4"} height={"2.2vw"} paddingLeft={"1.2vw"} paddingRight={"1vw"} marginLeft={"0.8vw"} label={"create"} clickFunction={handleGoCreateBusinessPage}/>

        </FloatButtonDiv>
        </HoverButtonDiv>
    )

};

const FloatButtonDiv = styled.div`
position: relative;
display: flex;
margin-top: -6.9vw;
z-index:  ${(props)=>props.showButton ? "1": "-1" };;
`


const HoverButtonDiv = styled.div`
position: relative
height: 8vw;
margin-top: 4vw;
z-index: 0;
`

export default SpecialHoverButton;