import styled from "styled-components";
import ButtonComponent from "./Forms/ButtonComponent";
import InputFieldComponent from "./Forms/InputFieldComponent";

const BusinessTileDiv = styled.div`
background-color: #ffffff;
border-radius: 2vw;
height: 7.5vh;
display: flex;
`

const StyledH4 = styled.h4`
margin-left: 1vw;
min-width: 15vw;

`
// (to center, #5e5ea2, #d4d4f0, #7d7dd5 , #8f8fd3 );
const UserTag = styled.div`
background-image: radial-gradient(#4f4db6, #8280be);
margin-top: 2vh;
margin-left: 1vw;
height: 2.7vh;
width: 7.8vw;
border-radius: 2vw;
font-size: 1vw;
color: white;
text-align: center;
padding-top: 0.7vh;
`


const BusinessTile = ({business, handleSelectBusiness, tag}) => {


    return (
        <BusinessTileDiv onClick={()=> handleSelectBusiness(business)}>
        <img
        src="https://via.placeholder.com/50"
          alt=""
          style={{marginTop: "1.4vh", borderRadius: "50%" }}
        />

        <ButtonComponent activated={true}height={"1.5vw"}marginLeft={"10vw"}>join</ButtonComponent>
        <StyledH4>{business.name}</StyledH4>
        <UserTag>{tag}</UserTag>
        <UserTag>View details</UserTag>
        </BusinessTileDiv>
        
    )
};

export default BusinessTile;