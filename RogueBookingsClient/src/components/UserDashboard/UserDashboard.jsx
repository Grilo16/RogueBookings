import ContentContainer from "./ContentContainer/ContentContainer";
import TabContainer from "./TabContainer/TabContainer";

function UserDashboard({content}) {
  return (


    <>
      <h2>User Dashboard</h2>
      <div><TabContainer/></div>
      <div><ContentContainer content={content}/></div>
    </>
  );
};

export default UserDashboard;
