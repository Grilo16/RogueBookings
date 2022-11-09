import { useContext } from "react";
import styled from "styled-components";
import { BusinessContext } from "../../BusinessPage";
import TeacherBioPage from "./TeacherBioPage";
import TeacherComponent from "./TeacherComponent";

const TeachersPage = () => {

    const {bState, bDispatch} = useContext(BusinessContext)


const teachers = [1, 2, 3, 4, 5, 6, 7].map((teacher, index)=>{
    return (
        <TeacherComponent key={index}/>
    )
});

    return (
        <>
        {bState.showTeacherBio
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
grid-template-columns: 1fr 1fr 1fr 1fr;
`


export default TeachersPage;