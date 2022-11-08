import styled from "styled-components"

const StyledButton = styled.button`
position: ${(props)=> props.position ? props.position : null};
background-color : ${(props)=>props.activated? "#ffcf7e": props.newColor ? props.newColor :"transparent"}; 
height: ${(props)=>props.height? props.height: "3.9vw"}; 
width: ${(props)=>props.width ? props.width : null};
padding-left: ${(props)=> props.paddingLeft? props.paddingLeft : "2.4vw"};
padding-right: ${(props)=> props.paddingRight? props.paddingRight : "2.4vw"};
border-radius: 30vw;
margin: 1vw;
font-size:  ${(props)=>props.fontSize? props.fontSize: "1.4vw"};
color: white;
margin-left : ${(props)=>props.marginLeft? props.marginLeft: "0vw"};
margin-top : ${(props)=>props.marginTop? props.marginTop: "0vw"};
font-family: 'Jua', sans-serif;
box-shadow: 0 0.2vw 0.3vw rgba(0,0,0,0.2);
border-style : ${(props)=>props.activated? "none": props.newColor ? "none" :"solid" };
border-color : ${(props)=>props.activated? "none": props.newColor ? "none" :"#6e6dbb" };


`


const ButtonComponent = ({label, activated, marginLeft, clickFunction, newColor, marginTop, height, width, fontSize ,position, paddingLeft, paddingRight}) => {


    const handleClick = (e) => {
        e.preventDefault()
        clickFunction()
    };

    return <StyledButton onClick={handleClick} activated={activated} marginLeft={marginLeft} newColor={newColor} marginTop={marginTop} height={height} width={width} fontSize={fontSize} position={position} paddingLeft={paddingLeft} paddingRight={paddingRight}>{label}</StyledButton>

};

export default ButtonComponent;