import styled from "styled-components";
import TableComponent from "../../../components/BusinessPages/HelperComponents/TableComponent";
import InputFieldComponent from "../../../components/Forms/InputFieldComponent";

const StudentsPage = () => {

    const mockStudent = {name: "ducky", email: "ducky@gmail.com", joinDate: "1-69-420"}

    let students = []
    
    for (let i = 0 ; i < 20 ; i++ ){
        students.push(mockStudent)
    }



    return (
        <StudentDiv>
        <InputFieldComponent placeholder={"search"}/>



        <TableComponent tableData={students} tableWidth={"50vw"}  headings={true} tdPaddingLeft={"4vw"} tdPaddingRight={"7.984vw"}/>
     
        
        </StudentDiv>
    )
}; 

const StudentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 13vw;
`

export default StudentsPage;
