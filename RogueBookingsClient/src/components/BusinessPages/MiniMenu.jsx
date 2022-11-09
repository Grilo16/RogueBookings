import { useContext } from "react";
import styled from "styled-components";
import MasterContainer, { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import memberRepo from "../../repositories/memberRepo";
import userRepo from "../../repositories/userRepo";
import ButtonComponent from "../Forms/ButtonComponent";
import MiniMenuItem from "./MiniMenuItem";

const MiniMenu = () => {


    const {state, dispatch} = useContext(MasterContext)

    const ownerMenu = ["Schedule", "Teachers", "Students", "Revenue", "Settings"].map((item, index)=>{
        return (
            <MiniMenuItem item={item} key={index}/>
        )
    })

    const handleLeaveBusiness = (selectedId) => {
    };
    

    return (
        <DisplayMenuDiv className="scroll-within">
        <MenuTitleDiv > 
            <MenuImg src="https://via.placeholder.com/69"/>
            <h3>Ducky business</h3>
        </MenuTitleDiv>


        <MenuContentDiv> 
        {ownerMenu}

        <ButtonComponent newColor={"#9291c5"} label={"Leave"} width={"max-content"} marginLeft={"2.6vw"} marginTop={"14vw"} height={"2.5vw"} fontSize={"1vw"} selectedId={state.selectedBusiness.id} clickFunction={handleLeaveBusiness}/>
        </MenuContentDiv>
    </DisplayMenuDiv>
    )
};

export default MiniMenu;


const DisplayMenuDiv = styled.div`
background-color: white;
margin-top: 3.3vw;
margin-left: -0.4vw;
width: 12.5vw;
border-radius: 1.5vw;
overflow:scroll;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);

`

const MenuImg = styled.img`
border-radius: 10vw;
margin-top: 2vw;
box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.1);
`

const MenuTitleDiv = styled.div`
text-align: center;

`

const MenuContentDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`