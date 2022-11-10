import { useContext } from "react";
import styled from "styled-components";
import { MasterContext } from "../../../../containers/MasterContainer";
import TeacherBioPage from "./TeacherBioPage";
import TeacherComponent from "./TeacherComponent";

const TeachersPage = () => {

    const {state, dispatch} = useContext(MasterContext)


const teachers = [1, 2, 3, 4, 5, 6, 7].map((teacher, index)=>{
    return (
        <TeacherComponent key={index}/>
    )
});

    return (
        <>
        {state.showTeacherBio
        ?<TeacherBioPage/>
        :<TeacherContainerDiv>
            <h1>Teachers</h1>
        <TeacherGridDiv>
            {teachers}
        </TeacherGridDiv>
        </TeacherContainerDiv>
        }
        </>
    )
}; 

const TeacherContainerDiv = styled.div`
margin-top: 3vw;
text-align: center;
`
const TeacherGridDiv = styled.div`
display: grid;
gap: 7vw;
grid-template-columns: 1fr 1fr 1fr 1fr;
`


export default TeachersPage;