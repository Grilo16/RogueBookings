import { useContext, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";
import BusinessTile from "./BusinessTile";

const UserBusinessesContainer = styled.div`
width: 35vw;
margin-left: 23.8vw;
background-color: white;
margin-top: 13vh;
text-align: left;
`

const UserBusinesses = () => {

const {state, dispatch} = useContext(MasterContext)
const [selectedBusiness, setSelectedBusiness] = useState({})
const [showSelected, setShowSelected] = useState(false)

const handleSelectBusiness = (business) => {
  setSelectedBusiness(business)
  setShowSelected(!showSelected)
};

const businesses = state.myBusinesses.map((business, index) => {
    return (
      <BusinessTile key={index} tag={"Owner"} business={business} handleSelectBusiness={handleSelectBusiness}/>
      )
    })
    
    const memberships = state.myMemberships.map((membership, index) => {
      return(
        <h4 key={index}>{membership.business.name}</h4>
        ) 
  })



    return (
        <UserBusinessesContainer>
            <h4>My Businesses</h4>
                {businesses}


        </UserBusinessesContainer>
    )
};

export default UserBusinesses;