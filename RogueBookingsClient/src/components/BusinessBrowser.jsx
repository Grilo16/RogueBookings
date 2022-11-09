import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";
import businessRepo from "../repositories/businessRepo";
import memberRepo from "../repositories/memberRepo";
import TableComponent from "./BusinessPages/HelperComponents/TableComponent";
import BusinessSummaryPage from "./BusinessSummaryPage";
import BusinessTile from "./BusinessTile";
import CalendarComponent from "./CalendarComponents/CalendarComponent";
import ButtonComponent from "./Forms/ButtonComponent";
import NavbarComponent from "./NavBar/NavbarComponent";
import { ContentDiv } from "./UserDashboard";

const BusinessBrowser = () => {
  const { state, dispatch } = useContext(MasterContext);

  const [allBusinesses, setAllBusinesses] = useState([]);

  const [selectedBusiness, setSelectedBusiness] = useState({});

  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    businessRepo.getAllBusinesss().then((businesses) => {
      setAllBusinesses(businesses);
    });
  }, []);

  // const handleJoinBusiness = () => {

  const handleSelectBusiness = (business) => {
    setSelectedBusiness(business);
    setShowSelected(!showSelected);
  };

  const viewBusinessDetails = (selectedId) => {
    console.log(selectedId);
  };

  const addMemberToBusiness = (selectedId) => {
    memberRepo.addMemberToBusinessByIds(state.user.id, selectedId).then(() => {
      memberRepo
        .getAllMembershipsByUserId(state.user.id)
        .then((memberships) => {
          dispatch({ type: "LoadMyMemberships", memberships });
        });
    });
  };

  const businesses = allBusinesses.map((business) => {
    const { name, rest } = business;
    return {
      name,
      viewBusiness: (
        <ButtonComponent
          selectedId={business.id}
          label={"View Details"}
          height={"1.5vw"}
          clickFunction={viewBusinessDetails}
          marginLeft={"0vw"}
          marginRight={"vw"}
          marginTop={"0.7vw"}
          paddingtop={"0.5vw"}
          paddingBottom={"1.5vw"}
          newColor={"#9291c5"} 
          fontSize={"1vw"}
          />
          ),
          joinButton: (
              <ButtonComponent
              selectedId={business.id}
              activated={true}
              label={"Join"}
              height={"1.5vw"}
              clickFunction={addMemberToBusiness}
          marginLeft={"0vw"}
          marginRight={"0vw"}
          paddingtop={"0.5vw"}
          paddingBottom={"1.5vw"}
          marginTop={"0.7vw"}
          fontSize={"1vw"}
          
          />
          ),
        };
    });

    return (
        <ContentDiv className="scroll-within">
      <PageTitle>Join Studio</PageTitle>
      {showSelected ? (
        <BusinessSummaryPage
          business={selectedBusiness}
          showSelected={showSelected}
          setShowSelected={setShowSelected}
        />
      ) : null}

      {allBusinesses.length > 0 ? (
    <TableDiv>

        <TableComponent
          tableData={businesses}
          tableWidth={"max-content"}
          tdPaddingRight={"1vw"}
          tdPaddingLeft={"1.5vw"}
          tdTxtAlign={"left"}
          />
    </TableDiv>
      ) : null}

   
    </ContentDiv>
  );
};

const PageTitle = styled.h1`
  margin-top: 4vw;
`;

const TableDiv = styled.div`
display: flex;
justify-content: center;
`;

export default BusinessBrowser;

{
  /* <h1>Browse businesses</h1>
{showSelected
    ? <BusinessSummaryPage business={selectedBusiness} showSelected={showSelected} setShowSelected={setShowSelected}/>
    : null
}
<BrowserDiv> 
{businesses}            
</BrowserDiv> */
}
