import { useContext, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputFieldComponent from "./InputFieldComponent";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";

const CreateBusinessForm = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    const [businessName, setBusinessName] = useState("");
    
    const handleClick = (e) => {
        businessRepo.createNewBusinessByUserId({name: businessName}, state.user.id).then(()=>{
            businessRepo.getAllBusinessesByUserId(state.user.id).then((businesses) => {dispatch({type: "LoadMyBusinesses", businesses})})
        })
    };



    return (
        <form >
            <InputFieldComponent state={businessName} setState={setBusinessName} placeholder={"Business Name"}/>   
            <ButtonComponent clickFunction={handleClick} label={"Create a business"} newColor={"#9291c5"} marginLeft={"3.8vw"} marginRight={""}/>
        </form>
    )
};

export default CreateBusinessForm