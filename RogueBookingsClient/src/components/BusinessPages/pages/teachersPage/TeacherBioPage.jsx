import { useContext } from "react";
import styled from "styled-components";
import ButtonComponent from "../../../Forms/ButtonComponent";
import { BusinessContext } from "../../BusinessPage";
import TableComponent from "../../HelperComponents/TableComponent";

const TeacherBioPage = () => {
    const {bState, bDispatch} = useContext(BusinessContext)
    
    const handleHideBio = () => {
        bDispatch({type: "ToggleTeacherBio"})
    };


    const MockUserData = {Name: "Ducky", Email:"Ducky@gmail.com", Joined: "7-11-2022", MoniesDue: "£30", ClassesTaught: 69, UpcomingClasses: 4, bio: "lalalalasdfasdfasd saldfkasdlkfj sdfljasdlkfjas sadlfkjasdf slkdfj saldfkj asdflkj sdaflkasjd flaksdfj alsdkfj saldkfjala"}
    const {bio, ...userData} = MockUserData
    const specialRow = {title: "bio", content: bio}

    return (
        <TeacherBioDiv>
      <ButtonComponent newColor="#9897e3" height={"1.5vw"} marginLeft={"62.4vw"} marginTop={"1vw"} label={"Back"} fontSize={"0.8vw"} clickFunction={handleHideBio}/>

      <TeacherBioImg src="https://via.placeholder.com/69" />  
      <h2>Teacher Name</h2>

      <ButtonComponent newColor="#bfbef7" height={"1.5vw"} width={"11.6vw"} marginLeft={"1vw"} marginTop={"1vw"}  paddingLeft={"0vw"} paddingRight={"0vw"} label={"Switch to student profile"} fontSize={"0.8vw"} />
<br />
<TableDivForButtons> 

      <ButtonComponent newColor="#9897e3" height={"0.9vw"} width={"3vw"} paddingLeft={"0vw"} paddingRight={"0vw"} marginLeft={"8vw"} marginTop={"0.3vw"}  label={"edit"} fontSize={"0.8vw"} position={"absolute"}/>

      <TableComponent tableData={userData} specialRow={specialRow} headings={true} footings={false} tdTxtAlign={"right"} col2Align={"left"} marginLeft={"22.25vw"} tdPaddingLeft={"2.5vw"} tdPaddingRight={"2.5vw"} />
</TableDivForButtons>
        </TeacherBioDiv>

    )
}; 


const TeacherBioImg = styled.img`
width: 11vw;
border-radius: 10vw;
`

const TeacherBioDiv = styled.div`
text-align:center;
`

const TableDivForButtons = styled.div`
position: relative;
`

export default TeacherBioPage