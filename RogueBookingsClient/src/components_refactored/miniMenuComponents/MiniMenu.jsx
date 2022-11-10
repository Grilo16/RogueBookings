import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonComponent from "../../components/Forms/ButtonComponent";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import userRepo from "../../repositories/userRepo";
import MiniMenuItem from "./MiniMenuItem";

const MiniMenu = () => {


    const {state, dispatch} = useContext(MasterContext)

    const ownerMenu = ["Schedule", "Teachers", "Students", "Revenue", "Settings"].map((item, index)=>{
        return (
            <MiniMenuItem item={item} key={index}/>
        )
    })

    const navigate = useNavigate();
    const handleLeaveBusiness = () => {
        memberRepo.removeMemberFromBusinessByMembersId(state.user.memberId)
        dispatch({type: "SelectNavTab", selectedNavTab: 0})
        dispatch({ type: "SetPageColor", color: "#7775c9" });
        dispatch({ type: "SetNavTabType", tabType: "dashboard" });
    }
        
        
    

    return (
        <DisplayMenuDiv className="scroll-within">
        <MenuTitleDiv > 
            <MenuImg src="https://via.placeholder.com/70"/>
            <h3>Ducky business</h3>
        </MenuTitleDiv>


        <MenuContentDiv>
        {ownerMenu}
        </MenuContentDiv>
        <ButtonComponent newColor={"#9291c5"} label={"Leave"} width={"max-content"} marginLeft={"1.8vw"}height={"2.5vw"} marginTop={"17vw"} fontSize={"1vw"} selectedId={state.selectedBusiness.id} clickFunction={handleLeaveBusiness}/>

    </DisplayMenuDiv>
    )
};

export default MiniMenu;


const DisplayMenuDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: white;
border-radius: 1.5vw;
overflow:scroll;
height: 98%;
width: 13%;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
margin-bottom: 2.3vw;

`

const MenuImg = styled.img`
border-radius: 10vw;
box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.1);
`

const MenuTitleDiv = styled.div`
text-align: center;
margin-top: 5vw;

`

const MenuContentDiv = styled.div`
margin-left: 2vw;
margin-right: 2vw;
margin-top: 1.5vw;
margin-bottom: -5vw;
height: max-content;
`