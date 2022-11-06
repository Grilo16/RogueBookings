import { useEffect, useState } from "react";
import styled from "styled-components"

const StyledButton = styled.button`
background-color : ${(props)=>props.activated? "#ffcf7e": "transparent"}; 
height: 7.5vh;
max-width: max-content;
padding-left 2.4vw;
padding-right 2.4vw;
border-radius: 30vh;
margin: 1vw;
font-size: 1.4vw;
color: white;
margin-left : ${(props)=>props.marginLeft? props.marginLeft: "0vw"};
font-family: 'Jua', sans-serif;
box-shadow: 0 0.5vh 0.5vh rgba(0,0,0,0.2);
border-style : ${(props)=>props.activated? "none": "solid" };
border-color : ${(props)=>props.activated? "none": "#6e6dbb" };


`


const ButtonComponent = ({label, activated, marginLeft, clickFunction}) => {


    const handleClick = (e) => {
        e.preventDefault()
        clickFunction()
    };

        return <StyledButton onClick={handleClick} activated={activated} marginLeft={marginLeft}>{label}</StyledButton>

};

export default ButtonComponent;