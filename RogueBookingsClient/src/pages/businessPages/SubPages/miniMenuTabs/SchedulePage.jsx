import styled from "styled-components";
import TableComponent from "../../../../components/tableComponents/TableComponent";
import CalendarComponent from "../../../../components/calendarComponents/CalendarComponent";
import PageTitle from "../../../../components/defaultPageComponents/PageTitle";
import { ContentDiv } from "../../../../containers/MasterContainer";
import ButtonComponent from "../../../../components/formComponents/ButtonComponent";

const SchedulePage = () => {
    
        const mockData2 = { studio: "Ducky Fitness", teacher: "You"}

        const mockClassData = {"Class": "quacking about", time:<ButtonComponent>test </ButtonComponent>, studio: "Ducky Fitness", list: <TableComponent tableData={mockData2}/>,teacher: "You", description: "lalalalala", bookings: "10/16"}

        const bookings =  [
            { type: "study", date: "2022-1-3", studio: "ghibli" },
            { type: "study", date: "2022-1-15", studio: "ghibli" },
            { type: "teach", date: "2022-02-3", studio: "ghibli" },
            { type: "teach", date: "2022-1-5", studio: "ghibli" },
          ]
           

        console.log(mockClassData)

    return (
    <ContentDiv>
        <PageTitle>Schedule</PageTitle>        

         <CalendarComponent/>

        <TableComponent tableData={bookings}/>


    </ContentDiv>
    )
}; 


{/* <TableComponent tableData={mockClassData} headings={true} footings={false} tdTxtAlign={"right"} col2Align={"left"}  tableWidth={"max-content"} tdPaddingLeft={"-4.5vw"} tdPaddingRight={"5.5vw"}/> */}


export default SchedulePage;