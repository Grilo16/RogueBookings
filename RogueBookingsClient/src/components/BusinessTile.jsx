import styled from "styled-components";
import InputFieldComponent from "./Forms/InputFieldComponent";

const BusinessTileDiv = styled.div`
background-color: #4d4d6b;
border-radius: 2vw;
height: 25vh;

`
const BusinessTile = ({business, handleSelectBusiness}) => {



    return (
        <BusinessTileDiv onClick={()=> handleSelectBusiness(business)}>
        <img
        src="https://via.placeholder.com/120"
          alt=""
          style={{marginTop: "3vh", borderRadius: "25%" }}
        />
        <h4>{business.name}</h4>
   
        </BusinessTileDiv>
        
    )
};

export default BusinessTile;