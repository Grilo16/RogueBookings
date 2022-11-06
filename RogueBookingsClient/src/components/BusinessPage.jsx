import { useContext } from "react";
import styled from "styled-components";
import { ContentDiv } from "../containers/DisplayPageContainer";
import { MasterContext } from "../containers/MasterContainer";


const OwnerH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: cyan
`

const MemberH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: yellow
`

const LessonH3 = styled.h3`
margin-left: 31.2vw;
width: 20vw;
background-color: purple
`


const BusinessPage = () => {

const {state, dispatch} = useContext(MasterContext)

    const owners = state.selectedBusiness.owners.map((owner, index)=>{
        return (
            <OwnerH3 key={index}>{owner.owner.firstName}</OwnerH3>
        )
    })

    const members = state.selectedBusiness.members.map((member, index)=>{
        return (
            <MemberH3 key={index}>{member.user.firstName}</MemberH3>
        )
    })

    const lessons = state.selectedBusiness.lessons.map((lesson, index)=>{
        return (
            <LessonH3 key={index}>{lesson.name}</LessonH3>

        )
    })

    return(
        <ContentDiv className = "scroll-within">
            <h1>{state.selectedBusiness.name}</h1>

            <h3>business Owners</h3>
            {owners}
            <h3>business members</h3>
            {members}
            <h3>business Lessons</h3>
            {lessons}



        </ContentDiv>
    )
};

export default BusinessPage;