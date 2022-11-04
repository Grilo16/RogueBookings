//TODO
//On submit load dashboard with registered user signed in


import { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import userRepo from "../../../repositories/userRepo";
import { RogueContext } from "../../ContextPage";


const NewUser = () => {
  const { state, dispatch } = useContext(RogueContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const addUserToDb = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userLayout: JSON.stringify(state.selectedUser.userLayout),
    };

    userRepo
      .addNewUser(user)
      .then((user) => {
        dispatch({ type: "LoadSelectedUser", user });
      })
      .then(() => {
        userRepo.getAllUsers().then((users) => {
          dispatch({ type: "LoadAllUsers", users });
        });
      });
  };


//HALP how do i redirect to dashboard with logged in user
  const SignUpAndLoadDashboard = () => {
    addUserToDb()
    
    
  }

  return (
    <form>
      <input
        placeholder="first name"
        onChange={handleFirstName}
        type="text"
        value={firstName}
      />
      <input
        placeholder="last name"
        onChange={handleLastName}
        type="text"
        value={lastName}
      />
      <input
        placeholder="email@email.com"
        onChange={handleEmail}
        type="text"
        value={email}
      />
      <button onClick={SignUpAndLoadDashboard}>Sign Up</button>
      
    </form>
  );
};

export default NewUser;
