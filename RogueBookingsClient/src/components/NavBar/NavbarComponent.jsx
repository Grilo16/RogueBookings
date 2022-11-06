import { useContext } from "react";
import styled from "styled-components"
import { MasterContext } from "../../containers/MasterContainer";
import NavbarItem from "./Button/NavbarItem";


const NavDiv = styled.div`
position: absolute;
background-color: #4a499e;
margin: 0px;
padding: 0px;
min-width: 16vw;
max-width: 16vw;
min-height: 100vh;
max-height: 100vh;
overflow-y: scroll;
`

const NavUl = styled.ul`
margin: 0;
padding: 0px;
`


const NavbarComponent = ({user}) => {

const {state, dispatch} = useContext(MasterContext)

const colors = ["#4a499e", "#7775c9", "#9594dc", "#b0afe8", "#cccbf8", ]
    
let cycler = false
let counter = 3
const memberships = state.myMemberships.map((membership, index) => {
    if (counter === 4){
        cycler = true
    }else if (counter === 0){
        cycler = false
    }
        const tabObject = {name: membership.business.name, fill: colors[counter], type: "business", businessId: membership.business.id}
        !cycler
        ? counter ++
        : counter --
        return tabObject
          
    })

const navItemList = [{name: user.firstName, fill: "#4a499e", type: "dashboard"}, {name: "My bookings", fill: "#7775c9", type: "join-business"}, {name: "Join a Studio", fill: "#9594dc", type: "join-business"}, ...memberships]



let topPosition = -9
const navItems = navItemList.map((item)=>{
    
    const zIndex = navItemList.length - navItemList.indexOf(item)
    let position = topPosition
    topPosition += 120
    return (
        <NavbarItem position={position} item={item} zIndex={zIndex} maxIndex={navItemList.length} id={navItemList.indexOf(item)} key={navItemList.indexOf(item)}/>
        )
})


    return (
        <NavDiv className="scroll-within">
            <NavUl >
                {navItems}
            </NavUl>
        </NavDiv>
        
    )
};

export default NavbarComponent;