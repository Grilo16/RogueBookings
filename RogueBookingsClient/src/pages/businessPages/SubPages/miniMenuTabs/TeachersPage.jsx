import { useContext } from "react";
import styled from "styled-components";
import { ContentDiv, MasterContext } from "../../../../containers/MasterContainer";
import TeacherBioPage from "./TeacherBioPage";
import TeacherComponent from "../../../../components/thumbnailComponents/TeacherComponent";

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
        :<ContentDiv>
            <h1>Teachers</h1>
        <TeacherGridDiv>
            {teachers}
        </TeacherGridDiv>
        </ContentDiv>
        }
        </>
    )
}; 


const TeacherGridDiv = styled.div`
display: grid;
gap: 7vw;
grid-template-columns: 1fr 1fr 1fr 1fr;
`


export default TeachersPage;