import { useContext, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";
import TableComponent from "./BusinessPages/HelperComponents/TableComponent";
import BusinessSummaryPage from "./BusinessSummaryPage";
import BusinessTile from "./BusinessTile";
import CreateBusinessForm from "./Forms/CreateBusinessForm";
import UserBusinesses from "./UserBusinesses";



export const ContentContainerDiv = styled.div`
display: flex
`



export const ContentDiv = styled.div`
display: flex:
flex-flow: column wrap;
justify-content: center;
margin-top: 2.9vw;
height: ${(props)=> props.height ? props.height : "46.9vw"};
width:  ${(props)=> props.width ? props.width : "83vw"};
border-radius: 1.5vw;
background-color: white;
text-align: center;
overflow-y: scroll;
box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.2);

`


const TableHeader = styled.h4`
text-align: left;
margin-left: 1vw;
background-color: white;
margin-bottom: 0.8vw;
font-size: 1vw;

`

// const MyBusinessesDiv = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr;
// gap: 2vh;
// margin-left: 1vw;
// margin-right: 1vw;
// background-color: grey;
// `

const TableContainerDiv = styled.div`
margin-left: 24.2vw;

`
const PageTitle = styled.h1`
margin-top: 5vw;
`


function UserDashboard() {


  const {state, dispatch} = useContext(MasterContext)


  const userDetails = {
      Name : state.user.firstName + " " + state.user.lastName,
      Email: state.user.email, 
      Password: "⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤"
  }


  return ( 

    <ContentDiv className="scroll-within">
      <PageTitle>Welcome, {state.user.firstName}!</PageTitle>

      <TableContainerDiv>  
      <TableHeader>My details </TableHeader>
      <TableComponent tdPaddingLeft={"1vw"} tdPaddingRight={"10vw"} ma tableData={userDetails} tdTxtAlign={"right"} col2Align={"left"} tableWidth={"32vw"}/>
      </TableContainerDiv>



      {/* <UserBusinesses/> */}
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
