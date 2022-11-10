import { useContext, useState } from "react";
import { MasterContext } from "../../containers_old/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import ButtonComponent from "./ButtonComponent";
import InputFieldComponent from "./InputFieldComponent";

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
            <ButtonComponent clickFunction={handleClick} label={"Create a business"} newColor={"#9291c5"}/>
        </form>
    )
};

export default CreateBusinessForm