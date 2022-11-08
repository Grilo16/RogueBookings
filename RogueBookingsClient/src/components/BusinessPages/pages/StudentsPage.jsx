import styled from "styled-components";
import InputFieldComponent from "../../Forms/InputFieldComponent";
import TableComponent from "../HelperComponents/TableComponent";

const StudentsPage = () => {

    const mockStudent = {name: "ducky", email: "ducky@gmail.com", joinDate: "1-69-420"}

    let students = []
    
    for (let i = 0 ; i < 20 ; i++ ){
        students.push(mockStudent)
    }



    return (
        <StudentDiv>
        <SearchStudentForm>
        <InputFieldComponent placeholder={"search"} marginLeft={"5vw"}/>

        </SearchStudentForm>


        <TableComponent tableData={students} tableWidth={"50vw"} marginLeft={"8.5vw"} headings={true} tdPaddingLeft={"4vw"} tdPaddingRight={"7.984vw"}/>
     
        
        </StudentDiv>
    )
}; 

const StudentDiv = styled.div`


`
const SearchStudentForm = styled.form`
margin-top: 3vw;
margin-left : 21vw;
`


export default StudentsPage;
