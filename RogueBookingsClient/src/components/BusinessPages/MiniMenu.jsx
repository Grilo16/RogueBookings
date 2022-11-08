import styled from "styled-components";
import MiniMenuItem from "./MiniMenuItem";

const MiniMenu = () => {

    const ownerMenu = ["Schedule", "Teachers", "Students", "Revenue", "Settings"].map((item, index)=>{
        return (
            <MiniMenuItem item={item} key={index}/>
        )
    })

    

    return (
        <DisplayMenuDiv className="scroll-within">
        <MenuTitleDiv > 
            <MenuImg src="https://via.placeholder.com/69"/>
            <h3>Ducky business</h3>
        </MenuTitleDiv>


        <MenuContentDiv> 
        {ownerMenu}
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
`

const MenuImg = styled.img`
border-radius: 10vw;
margin-top: 2vw;
`

const MenuTitleDiv = styled.div`
text-align: center;

`

const MenuContentDiv = styled.div`
text-align: center;

`