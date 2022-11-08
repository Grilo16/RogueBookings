import FilterBar from "../../filterBar/FilterBar";
import TableComponent from "../HelperComponents/TableComponent";

const SchedulePage = () => {
    
        const mockClassData = {"Class": "quacking about", time:"0715-0800", studio: "Ducky Fitness", teacher: "You", description: "lalalalala", bookings: "10/16"}

        console.log(mockClassData)

    return (
    <div>
        <h1>I'm the SchedulePage page</h1>
        <FilterBar />
        <TableComponent tableData={mockClassData} headings={true} footings={false} tdTxtAlign={"right"} col2Align={"left"} marginLeft={"24.2vw"} tableWidth={"max-content"} tdPaddingLeft={"-4.5vw"} tdPaddingRight={"5.5vw"}>

        <tbody>
            <tr><td><p>hello</p></td></tr>            

        </tbody>
        
        </TableComponent>


    </div>
    )
}; 


export default SchedulePage;