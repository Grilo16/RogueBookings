import { useContext, useState } from "react";
import styled from "styled-components";
import { ContentDiv } from "../containers/DisplayPageContainer";
import { MasterContext } from "../containers/MasterContainer";
import BusinessSummaryPage from "./BusinessSummaryPage";
import BusinessTile from "./BusinessTile";
import CreateBusinessForm from "./Forms/CreateBusinessForm";



const MyBusinessesDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 2vh;
margin-left: 1vw;
margin-right: 1vw;
background-color: grey;
`

const CreateBusinessDiv = styled.div`

`
function UserDashboard() {

  const [showSelected, setShowSelected] = useState(false)

  const {state, dispatch} = useContext(MasterContext)

  const [selectedBusiness, setSelectedBusiness] = useState({})

 

  const handleSelectBusiness = (business) => {
    setSelectedBusiness(business)
    setShowSelected(!showSelected)
    
    console.log(business)
};
  
  const businesses = state.myBusinesses.map((business, index) => {
    return (
      <BusinessTile key={index} business={business} handleSelectBusiness={handleSelectBusiness}/>
      )
    })
    
    const memberships = state.myMemberships.map((membership, index) => {
      return(
        <h4 key={index}>{membership.business.name}</h4>
        ) 
  })


  return ( 
    <ContentDiv className="scroll-within">
      <h3>Welcome!</h3>
      <h2>{state.user.firstName + " " + state.user.lastName}</h2>
      <hr />
      <h3>Create a business</h3>
      <CreateBusinessForm/>
      <hr />

      <h2>My Businesses: </h2>
      <MyBusinessesDiv>
      {showSelected
            ? <BusinessSummaryPage business={selectedBusiness} showSelected={showSelected} setShowSelected={setShowSelected} owner={true}/>
            : null
            }
      {businesses}
      </MyBusinessesDiv>
      <hr />

      <h2>My memberships: </h2>
      {memberships}
      <hr />
      <h2>My classes : </h2>


    

    </ContentDiv>


  );
};

export default UserDashboard;
