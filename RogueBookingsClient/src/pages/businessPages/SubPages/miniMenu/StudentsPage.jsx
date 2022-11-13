import styled from "styled-components";
import InputFieldComponent from "../../../../components/formComponents/InputFieldComponent";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import { ContentDiv } from "../../../../containers/MasterContainer";

const StudentsPage = () => {

    const mockStudent = {name: "ducky", email: "ducky@gmail.com", joinDate: "1-69-420"}

    let students = []
    
    for (let i = 0 ; i < 20 ; i++ ){
        students.push(mockStudent)
    }



    return (
        <ContentDiv marginTop={"13vw"}>



        <InputFieldComponent placeholder={"search"}/>
        <TableComponent tableData={students} tableWidth={"50vw"}  headings={true} tdPaddingLeft={"4vw"} tdPaddingRight={"7.984vw"}/>
     
        
        </ContentDiv>
    )
}; 



export default StudentsPage;
