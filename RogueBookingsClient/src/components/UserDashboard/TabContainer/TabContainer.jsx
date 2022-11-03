import Tab from "./Tab/Tab";

function TabContainer() {

  const getTabsToDisplay = (userBusinesses) => {
    const tabsToDisplay = [{name: "Profile"}, {name: "Calendar"}];
    userBusinesses.forEach((business) => {
      tabsToDisplay.push(business);
    });
    return tabsToDisplay
  };

  const makeTabs = (tabsToDisplay) => {
    const tabs = tabsToDisplay.map(tab => {
      return <Tab tabName={tab.name}/>;
    });
    return tabs
  };

  const userBusinesses = [{name: "Example"}, {name: "BOOP"}]
  const tabs = makeTabs(getTabsToDisplay(userBusinesses));

  return (
    <>
      <h2>A styled div containing multiple tabs</h2>
      <ul>{tabs}</ul>
    </>
  );
}

export default TabContainer;
