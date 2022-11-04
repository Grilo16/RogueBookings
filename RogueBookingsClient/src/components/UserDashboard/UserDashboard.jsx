import ContentContainer from "./ContentContainer/ContentContainer";
import TabContainer from "./TabContainer/TabContainer";

function UserDashboard({content}) {
  return (


    <>
      <h1>User Dashboard</h1>
      <div><TabContainer/></div>
      <div><ContentContainer content={content}/></div>
    </>
  );
};

export default UserDashboard;
