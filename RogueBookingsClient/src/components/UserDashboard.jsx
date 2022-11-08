import { useContext, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";
import BusinessSummaryPage from "./BusinessSummaryPage";
import BusinessTile from "./BusinessTile";
import CreateBusinessForm from "./Forms/CreateBusinessForm";
import UserBusinesses from "./UserBusinesses";
import UserDetailsTable from "./UserDetailsTable";



export const ContentContainerDiv = styled.div`
display: flex
`



export const ContentDiv = styled.div`
margin-top: 3.3vw;
height: ${(props)=> props.height ? props.height : "46.9vw"};
width:  ${(props)=> props.width ? props.width : "83vw"};
border-radius: 1.5vw;
background-color: white;
text-align: center;
overflow-y: scroll;
`

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


  const {state, dispatch} = useContext(MasterContext)


  


  return ( 

    <ContentDiv className="scroll-within">
      <h1>Welcome, {state.user.firstName}!</h1>
      <UserDetailsTable/>
      <UserBusinesses/>
    </ContentDiv>

    



  );
};

export default UserDashboard;
{/* <h2></h2>
<hr />
<h3>Create a business</h3>
<hr />

<h2>My Businesses: </h2>
<MyBusinessesDiv>
<CreateBusinessForm/>
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
<h2>My classes : </h2> */}
