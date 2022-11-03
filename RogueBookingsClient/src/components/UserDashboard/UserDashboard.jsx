import ContentContainer from "./ContentContainer/ContentContainer";
import TabContainer from "./TabContainer/TabContainer";

function UserDashboard({content}) {
  return (


    <>
      <h2>User dashboard</h2>
      <p>
       This will have tabs on the left, and TabContent on the right
      </p>
      <TabContainer/>
      <ContentContainer content={content}/>
    </>
  );
};

export default UserDashboard;
