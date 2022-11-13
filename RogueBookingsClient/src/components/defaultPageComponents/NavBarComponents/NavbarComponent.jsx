import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import styled from "styled-components"
import { MasterContext } from "../../../containers/MasterContainer";
import businessRepo from "../../../repositories/businessRepo";
import memberRepo from "../../../repositories/memberRepo";
import NavbarItem from "./NavbarItem";
import SpecialHoverButton from "./SpecialHoverButton";


const NavDivContainer = styled.div`
background-color: #4a499e;
margin: 0px;
padding: 0px;
margin-top: -2.2vw;
min-width: 14.55vw;
overflow-y: scroll;
font-size: 1.2vw;
`


const NavbarComponent = () => {

const {state, dispatch} = useContext(MasterContext)
  
    
useEffect(()=>{
    businessRepo.getAllBusinessesByUserId(state.user.id).then((businesses) =>{
        dispatch({type: "LoadMyBusinesses", businesses})
            memberRepo.getAllMembershipsByUserId(state.user.id).then((memberships)=>{
                dispatch({type: "LoadMyMemberships", memberships})
                
            })
        })
    
        
    },[state.selectedTabType])



    const colors = ["#4a499e", "#7775c9", "#9594dc", "#b0afe8", "#cccbf8", ]
    
    let cycler = false
    let counter = 3
    let memberships = state.myMemberships.map((membership, index) => {
        if (counter === 4){
            cycler = true
        }else if (counter === 0){
            cycler = false
        }
        const tabObject = {name: membership.business.name, fill: colors[counter], type: "business_member", businessId: membership.business.id, memberId: membership.id}
        !cycler
        ? counter ++
        : counter --
        return tabObject
        
    })


        
        let ownerships = state.myBusinesses.map((ownership, index) => {
            if (counter === 4){
                cycler = true
            }else if (counter === 0){
                cycler = false
            }
            const tabObject = {name: ownership.name, fill: colors[counter], type: "business_owner", businessId: ownership.id, ownerId: ownership.owners.id}
            !cycler
            ? counter ++
            : counter --
            return tabObject
        })
            
        
   
    
    

    
    const navItemList = [{name: state.user ? state.user.firstName: "No user selected" , fill: "#4a499e", type: "dashboard"}, {name: "My bookings", fill: "#7775c9", type: "join-business"}, ...ownerships ,...memberships]
    


const navItems = navItemList.map((item, index)=>{
    return (
        <NavbarItem item={item} id={index} key={index}/>
        )
})



    return (
        <NavDivContainer className="scroll-within">
                {navItems}
               <SpecialHoverButton navItems={navItems}/>
        </NavDivContainer>
        
    )
};

export default NavbarComponent;