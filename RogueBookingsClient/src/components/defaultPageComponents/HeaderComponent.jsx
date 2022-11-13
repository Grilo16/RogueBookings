import styled from "styled-components";
import {ReactComponent as Logo} from "../../images/logo.svg"

const HeaderDiv = styled.div`
display: flex;
position: relative;
background-color : #9795e1;
width: 100%;
height: 1.55vw;
padding-bottom: 0.6vw;
z-index: 1000 ;
justify-content: space-between;
box-shadow: 0.2vw 0.2vw 0.6vw rgba(0, 0, 0, 0.2);
`


const LogoDiv = styled.div`
width: max-content;
display: flex
`

const StyledLogOut = styled.a`
color: white;
text-decoration: none;
margin-top: 0.5vw;
margin-right: 0.5vw;
font-size: 1vw;
`

const HeaderTitle = styled.h1`
color: #4a499e;
margin: 0vw;
margin-top: 0.2vw;
font-size: 1.5vw;
margin-left: 0.5vw;


`

const HeaderComponent = () => {
    return (
        
        
<HeaderDiv> 
<LogoDiv>

<Logo fill={"#4a499e"} style={{marginLeft: "0.9vw", height: "1.9vw", marginTop: "0.1vw"  }}/>
<HeaderTitle>Rogue Bookings</HeaderTitle>
</LogoDiv>

<StyledLogOut href="/">Log out</StyledLogOut>
</HeaderDiv>
    
        )
    };

export default HeaderComponent;