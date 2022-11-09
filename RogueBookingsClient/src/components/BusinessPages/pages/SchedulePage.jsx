import styled from "styled-components";
import CalendarComponent from "../../CalendarComponents/CalendarComponent";
import ButtonComponent from "../../Forms/ButtonComponent";
import TableComponent from "../HelperComponents/TableComponent";

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
    <ScheduleDiv>
        <PageTitle>Schedule</PageTitle>        

        <FilterBarDiv> 
         <CalendarComponent/>
        </FilterBarDiv>

        <TableComponent tableData={bookings}/>


    </ScheduleDiv>
    )
}; 


{/* <TableComponent tableData={mockClassData} headings={true} footings={false} tdTxtAlign={"right"} col2Align={"left"}  tableWidth={"max-content"} tdPaddingLeft={"-4.5vw"} tdPaddingRight={"5.5vw"}/> */}

const PageTitle = styled.h1`

`

const ScheduleDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const FilterBarDiv = styled.div`
display: flex;

`

export default SchedulePage;