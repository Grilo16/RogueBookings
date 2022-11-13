import { useContext } from "react";
import styled from "styled-components";
import { ContentDiv, MasterContext } from "../../containers/MasterContainer";
import ButtonComponent from "../formComponents/ButtonComponent";

const TeacherComponent = () => {

    const {state, dispatch} = useContext(MasterContext)

    const handleShowBio = () => {

        dispatch({type: "ToggleTeacherBio"})
        
    };

    return (
      <ContentDiv>
        <div>
          <TeacherImg src="https://via.placeholder.com/69" />  
        </div>

      <h2>Teacher Name</h2>
      <br />
      <div>
      <ButtonComponent newColor="#9897e3" height={"1.5vw"}  width={"max-content"} label={"Bio"} fontSize={"0.8vw"} clickFunction={handleShowBio}/>
      </div>
      </ContentDiv>  
    )
};



const TeacherImg = styled.img`
border-radius: 20vw;
width: 9vw;

`
export default TeacherComponent; 