import { useContext, useState } from "react";
import styled from "styled-components"
import { BusinessContext } from "./BusinessPage";

const MenuItem = styled.h4`
text-align: center;
background-color: ${(props) => props.changeColor ? "#e6e6fe" : "#ffffff"};
margin: 0;
margin-left: 1.5vw;
margin-bottom: 1vw;
height: 2vw;
padding-top: 0.5vw;
border-radius: 3vw/4.5vw;
width: 9vw;
`

const MiniMenuItem = ({item}) => {



    const {bState, bDispatch} = useContext(BusinessContext)

    

    const handleMenuClick = (e) => {
        bDispatch({type: "SelectPage", selectedPage: item})
    };

    return (
        <>
        {bState.selectedPage === item ? <MenuItem onClick={handleMenuClick} changeColor={true}>{item}</MenuItem>: <MenuItem onClick={handleMenuClick} >{item}</MenuItem>}
        </>
    )
};

export default MiniMenuItem;