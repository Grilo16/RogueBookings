import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MasterContext } from "../containers/MasterContainer";
import businessRepo from "../repositories/businessRepo";
import TableComponent from "./BusinessPages/HelperComponents/TableComponent";
import BusinessSummaryPage from "./BusinessSummaryPage";
import BusinessTile from "./BusinessTile";
import CalendarComponent from "./CalendarComponents/CalendarComponent";
import { ContentDiv } from "./UserDashboard";


const BrowserDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
gap: 2vw;
margin-right: 2vw;
margin-left: 2vw;
`



const BusinessBrowser = () => {

    const {state, dispatch} = useContext(MasterContext)

    const [allBusinesses, setAllBusinesses] = useState([])

    const [selectedBusiness, setSelectedBusiness] = useState({})

    const [showSelected, setShowSelected] = useState(false)

    useEffect(()=>{
        businessRepo.getAllBusinesss().then((businesses) => {
            setAllBusinesses(businesses)
        })
    }, [])


    const handleSelectBusiness = (business) => {
        setSelectedBusiness(business)
        setShowSelected(!showSelected)
    };


    const businesses = allBusinesses.map((business, index) => {
        return (
          <BusinessTile key={index} business={business} handleSelectBusiness={handleSelectBusiness} />
        )
      })




      return (
        <ContentDiv className="scroll-within">


<CalendarComponent/>
















        </ContentDiv>
    )
};

{/* <h1>Browse businesses</h1>
{showSelected
? <BusinessSummaryPage business={selectedBusiness} showSelected={showSelected} setShowSelected={setShowSelected}/>
: null
}
<BrowserDiv> 
    {businesses}            
</BrowserDiv> */}
export default BusinessBrowser;