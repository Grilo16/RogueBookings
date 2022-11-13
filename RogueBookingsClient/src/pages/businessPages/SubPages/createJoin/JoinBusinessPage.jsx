import { useEffect } from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import DefaultPage from "../../../../components/defaultPageComponents/DefaultPage";
import PageTitle from "../../../../components/defaultPageComponents/PageTitle";
import { ContentDiv, MasterContext } from "../../../../containers/MasterContainer";
import businessRepo from "../../../../repositories/businessRepo";
import memberRepo from "../../../../repositories/memberRepo";
import ButtonComponent from "../../../../components/formComponents/ButtonComponent";

const JoinBusinessPage = () =>{

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
      
      <ContentDiv>
<PageTitle>Join Studio</PageTitle>
  

      {allBusinesses.length > 0 ? (

        <TableComponent
          tableData={businesses}
          tableWidth={"max-content"}
          tdPaddingRight={"1vw"}
          tdPaddingLeft={"1.5vw"}
          tdTxtAlign={"left"}
          />
      ) : null}


        </ContentDiv>

   
  );
};


export default JoinBusinessPage;