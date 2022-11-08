import { useContext } from "react";
import styled from "styled-components"
import { MasterContext } from "../../containers/MasterContainer";
import NavbarItem from "./Button/NavbarItem";


const NavDivContainer = styled.div`
position: relative;
background-color: #4a499e;
margin: 0px;
padding: 0px;
height: 100vh;
overflow-y: scroll;
min-width: 14.0vw;
font-size: 1.2vw;
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



const navItems = navItemList.map((item, index)=>{
    return (
        <NavbarItem item={item}  id={index} key={index}/>
        )
})


    return (
        <NavDivContainer className="scroll-within">
                {navItems}
        </NavDivContainer>
        
    )
};

export default NavbarComponent;