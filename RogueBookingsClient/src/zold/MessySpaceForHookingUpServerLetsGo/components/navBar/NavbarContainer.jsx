import styled from "styled-components"
import NavbarItem from "./NavbarItem";


const NavDiv = styled.div`
background-color: #4a499e;
margin: 0px;
padding: 0px;
min-width: 15.2vw;
max-width: 15.2vw;
`

const NavUl = styled.ul`
margin: 0;
padding: 0px;
`


const Navbar = () => {

const navItemList = [{name: "Thomas Duck", fill: "#4a499e"}, {name: "My Bookings", fill: "#7775c9"}, {name: "Duck Yoga", fill: "#9594dc"}, {name: "Quacking Yoga", fill: "#b0afe8"},{name: "Ducky Fitness", fill: "#cccbf8"}]


let topPosition = -69
const navItems = navItemList.map((item)=>{
    
    const zIndex = navItemList.length - navItemList.indexOf(item)
    let position = topPosition
    topPosition += 120
    return (
        <NavbarItem position={position} item={item} zIndex={zIndex} maxIndex={navItemList.length} id={navItemList.indexOf(item)} key={navItemList.indexOf(item)}/>
        )
})


    return (
        <NavDiv>
        <NavUl >
            {navItems}
        </NavUl>
        </NavDiv>
        
    )
};

export default Navbar;