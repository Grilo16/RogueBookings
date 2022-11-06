import { useContext } from "react";
import userRepo from "../../repositories/userRepo";
import { HolderContext } from "../MasterContainer";



const PageEditor = () => {
    
    const {state, dispatch} = useContext(HolderContext)

const handleColorChange = (e) => {

    dispatch({type: "ChangeBackgroundColor", color: e.target.value})
    console.log(e.target.value)
};

const saveNewBgColor = () => {
    const patchObject = {userLayout: JSON.stringify(state.selectedUser.userLayout)}
    userRepo.editUserById(patchObject, state.selectedUser.id).then((user)=>{ dispatch({type: "LoadSelectedUser", user})})
};

    return (
        <>
        <input onChange={handleColorChange} type="color" value={state.selectedUser.userLayout.backgroundColor}/>
        <button onClick={saveNewBgColor}>Save new color</button>
        </>
    )
};

export default PageEditor;