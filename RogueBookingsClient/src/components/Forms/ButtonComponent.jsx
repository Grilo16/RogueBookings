import styled from "styled-components";

const StyledButton = styled.button`
  position: ${(props) => (props.position ? props.position : null)};
  background-color: ${(props) =>
    props.activated
      ? "#ffcf7e"
      : props.newColor
      ? props.newColor
      : "transparent"};
  height: ${(props) => (props.height ? props.height : "3.9vw")};
  width: ${(props) => (props.width ? props.width : null)};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "2.4vw")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "2.4vw"};
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : "0vw")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "0vw"};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "30vw")};
  margin: 1vw;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4vw")};
  color: white;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0vw")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0vw")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0vw")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0vw")};
  font-family: "Jua", sans-serif;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);
  border-style: ${(props) =>
    props.activated ? "none" : props.newColor ? "none" : "solid"};
  border-color: ${(props) =>
    props.activated ? "none" : props.newColor ? "none" : "#6e6dbb"};
`;

const StyledLabel = styled.p`
width: max-content;
margin: 0;

`

const ButtonComponent = ({
  label,
  activated,
  marginLeft,
  clickFunction,
  hoverFunction,
  newColor,
  marginTop,
  height,
  width,
  fontSize,
  position,
  paddingLeft,
  paddingRight,
  paddingtop,
  paddingBottom,
  marginRight,
  selectedId,
  borderRadius,
  param,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    clickFunction(selectedId);
  };


  const handleHover = ()=>{
    if (!hoverFunction){
      return
    }
    hoverFunction(param)
  }
  return (
    <StyledButton
      onClick={handleClick}
      onMouseOver={()=>handleHover()}
      activated={activated}
      marginLeft={marginLeft}
      newColor={newColor}
      marginTop={marginTop}
      height={height}
      width={width}
      fontSize={fontSize}
      position={position}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingtop={paddingtop}
      paddingBottom={paddingBottom}
      marginRight={marginRight}
      selectedId={selectedId}
      borderRadius={borderRadius}
    >
      <StyledLabel>{label}</StyledLabel>
    </StyledButton>
  );
};

export default ButtonComponent;
