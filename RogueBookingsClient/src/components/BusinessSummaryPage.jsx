import { useContext } from "react";
import { MasterContext } from "../containers/MasterContainer";
import memberRepo from "../repositories/memberRepo";
import CreateLessonForm from "./Forms/CreateLessonForm";
import { ContentDiv } from "./UserDashboard";

const BusinessSummaryPage = ({showSelected, setShowSelected, business, owner}) => {

const {state, dispatch} = useContext(MasterContext)

    const handleGoBack = () => {
        setShowSelected(!showSelected)
    };

    const handleJoinBusiness = () => {
        memberRepo.addMemberToBusinessByIds(state.user.id, business.id).then(()=> {
            memberRepo.getAllMembershipsByUserId(state.user.id).then((memberships)=>{
                dispatch({type: "LoadMyMemberships", memberships})
            })
        })
    };

    return (
        <ContentDiv height="50vh" width="30vw" top="27vh" left="27vw" className="scroll-within"> 
        <h1>business page</h1>
        <h2>Name : {business.name}</h2>
        <h2>Balance : {business.balance}</h2>
        <button onClick={handleGoBack}>Go back </button>
        <button onClick={handleJoinBusiness}>Join business</button>
        {owner === true
        ? <CreateLessonForm business={business}/>
        : null
        } 
        </ContentDiv>
    )
};

export default BusinessSummaryPage;