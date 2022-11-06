import { useContext, useState } from "react";
import { MasterContext } from "../../containers/MasterContainer";
import businessRepo from "../../repositories/businessRepo";
import InputField from "./InputField";

const CreateBusinessForm = () => {
    
    const {state, dispatch} = useContext(MasterContext)

    const [businessName, setBusinessName] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault()
        businessRepo.createNewBusinessByUserId({name: businessName}, state.user.id).then(()=>{
            businessRepo.getAllBusinessesByUserId(state.user.id).then((businesses) => {dispatch({type: "LoadMyBusinesses", businesses})})
        })
    };

       


    return (
        <form >
            <InputField state={businessName} setState={setBusinessName} placeholder={"Business Name"}/>   

            <button onClick={handleClick}>Create new business</button>     
        </form>
    )
};

export default CreateBusinessForm