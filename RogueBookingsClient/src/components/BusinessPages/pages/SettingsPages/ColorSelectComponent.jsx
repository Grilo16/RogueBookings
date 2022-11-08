import styled from "styled-components";

const ColorSelectComponent = ({color}) => {

    const handleColorSelect = () => {
        console.log(color)
    };

   return (

    <ColorSelectDiv onClick={handleColorSelect} color={color}> 
    <p> </p>
    </ColorSelectDiv>
   ) 
}; 


const ColorSelectDiv = styled.div`
background-color : ${(props) => props.color? props.color: "white"};
border-radius: 20vw;
height: 4.2vw;
width: 4.2vw;
margin-left: 1.4vw
`

export default ColorSelectComponent;