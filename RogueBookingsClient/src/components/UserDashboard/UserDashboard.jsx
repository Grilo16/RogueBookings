
import ContentContainer from "./ContentContainer/ContentContainer";
import TabContainer from "./TabContainer/TabContainer";
import { createContext, useReducer } from "react";

function Dashboard ({content}){


 

  return (
<>
      <h1>User Dashboard</h1>
      <div><TabContainer /></div>
      <div><ContentContainer content={content}/></div>
      </>
    
  );
};

export default Dashboard;
