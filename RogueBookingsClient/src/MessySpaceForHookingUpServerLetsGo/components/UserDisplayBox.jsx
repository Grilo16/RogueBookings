import { useContext, useEffect } from "react";
import { HolderContext } from "../MasterContainer";
import styled from "styled-components";
import userRepo from "../../repositories/userRepo";
import AddNewUserForm from "./AddNewUserForm";

const UserDiv = styled.div.attrs(({backgroundColor})=>({
    style: {
        backgroundColor : backgroundColor
    }
}))`
  position: absolute;  
  text-align: center;
  height: 50vh;
  width: 50%;
`;

const UserDisplayBox = () => {
  const { state, dispatch, addUserToDb } = useContext(HolderContext);

  const users = state.allUsers.map((user)=>{
    return (
        <option key={user.id} value={user.id}>{user.firstName}</option>
    )
  })

  const handleChangeUser = (e) =>{
    userRepo.getUserById(e.target.value).then((user)=>{dispatch({type: "LoadSelectedUser", user})})
    console.log(e.target.value)
  }


  return (
    <UserDiv backgroundColor={state.selectedUser.userLayout.backgroundColor}>

        <h1>{state.selectedUser.id}</h1>
        <h1>{state.selectedUser.firstName + state.selectedUser.lastName}</h1>
        <h1>{state.selectedUser.email}</h1>

        <form action="">
            <select onChange={handleChangeUser} name="" id="">
                <option value=""></option>
                {users}
            </select>
        </form>

        <AddNewUserForm/>
   

    </UserDiv>
  );
};

export default UserDisplayBox;
