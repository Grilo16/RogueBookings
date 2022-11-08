import { useContext } from "react";
import styled from "styled-components";
import ButtonComponent from "../../../Forms/ButtonComponent";
import { BusinessContext } from "../../BusinessPage";

const TeacherComponent = () => {

    const {bState, bDispatch} = useContext(BusinessContext)

    const handleShowBio = () => {

        bDispatch({type: "ToggleTeacherBio"})
        
    };

    return (
      <TeacherDiv>
      <TeacherImg src="https://via.placeholder.com/69" />  
      <h2>Teacher Name</h2>
      <br />
      <ButtonComponent newColor="#9897e3" height={"1.5vw"} marginLeft={"1.4vw"} marginTop={"-2.2vw"} label={"Bio"} fontSize={"0.8vw"} clickFunction={handleShowBio}/>
      </TeacherDiv>  
    )
};

const TeacherDiv = styled.div`
text-align: center;
margin-top: 2vw;
`

const TeacherImg = styled.img`
border-radius: 20vw;
width: 9vw;

`
export default TeacherComponent; 