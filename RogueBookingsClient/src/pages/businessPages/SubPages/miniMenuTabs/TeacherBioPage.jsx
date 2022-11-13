import { useContext } from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../components/formComponents/ButtonComponent";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import { ContentDiv, MasterContext } from "../../../../containers/MasterContainer";

const TeacherBioPage = () => {
  const { state, dispatch } = useContext(MasterContext);

  const handleHideBio = () => {
    dispatch({ type: "ToggleTeacherBio" });
  };

  const MockUserData = {
    Name: "Ducky",
    Email: "Ducky@gmail.com",
    Joined: "7-11-2022",
    "Monies Due": "£30",
    "Classes Taught": 69,
    "Upcoming Classes": 4,
    bio: "lalalalasdfasdfasd saldfkasdlkfj sdfljasdlkfjas sadlfkjasdf slkdfj saldfkj asdflkj sdaflkasjd flaksdfj alsdkfj saldkfjala",
  };
  const { bio, ...userData } = MockUserData;
  const specialRow = { title: "bio", content: bio };

  return (
    <ContentDiv>
      <ButtonComponent
        newColor="#9897e3"
        height={"1.5vw"}
        marginLeft={"61.4vw"}
        marginTop={"2vw"}
        label={"Back"}
        fontSize={"0.8vw"}
        clickFunction={handleHideBio}
      />
      <ImgDiv>
        <TeacherBioImg src="https://via.placeholder.com/69" />
        <h2>Teacher Name</h2>
      </ImgDiv>
      <ButtonComponent
        newColor="#bfbef7"
        height={"1.5vw"}
        width={"11.6vw"}
        marginTop={"1vw"}
        paddingLeft={"1.4vw"}
        paddingRight={"0vw"}
        label={"Switch to student profile"}
        fontSize={"0.8vw"}
      />

      <ButtonComponent
        newColor="#9897e3"
        height={"0.9vw"}
        width={"3vw"}
        paddingLeft={"0.9vw"}
        paddingRight={"0vw"}
        marginLeft={"26vw"}
        marginTop={"0vw"}
        label={"Edit"}
        fontSize={"0.8vw"}
        position={"relative"}
      />

      <TableComponent
        tableData={userData}
        specialRow={specialRow}
        headings={true}
        footings={false}
        tdTxtAlign={"right"}
        col2Align={"left"}
        tdPaddingLeft={"2.5vw"}
        tdPaddingRight={"2.5vw"}
        tableWidth={"30vw"}
        table
      />
    </ContentDiv>
  );
};

const TeacherBioImg = styled.img`
  width: 11vw;
  border-radius: 10vw;
`;

const ImgDiv = styled.div``;



export default TeacherBioPage;
