//The page that loads all the data
//and provides context to the rest of the app,
//for now...

import { createContext, useEffect, useReducer } from "react";
import userRepo from "../repositories/userRepo";
import NewUser from "./Pages/Users/NewUser";
import UserDashboard from "./UserDashboard/UserDashboard";


export const RogueContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "LoadAllUsers":
      return { ...state, allUsers: [...action.users] };
    case "LoadSelectedUser":
      return { ...state, selectedUser: { ...action.user } };
    default:
      return state;
  }
};

const ContextPage = () => {
  const userId = 1;
  const states = {
    allUsers: [],
    selectedUser: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      userLayout: { backgroundColor: "#000000" },
    },
  };
  const [state, dispatch] = useReducer(reducer, states);

  useEffect(() => {
    userRepo.getUserById(userId).then((user) => {
      dispatch({ type: "LoadSelectedUser", user });
    });
    userRepo.getAllUsers().then((users) => {
      dispatch({ type: "LoadAllUsers", users });
    });
  }, []);

  return (
    <RogueContext.Provider value={{ state, dispatch }}>
    <NewUser/>
    
    </RogueContext.Provider>
  );
};


export default ContextPage;
