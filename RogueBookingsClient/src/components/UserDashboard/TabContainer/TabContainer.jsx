import Tab from "./Tab/Tab";

function TabContainer() {
  const getTabsToDisplay = (userBusinesses) => {
    const tabsToDisplay = [{ name: "Profile" }, { name: "Calendar" }];
    userBusinesses.forEach((business) => {
      tabsToDisplay.push(business);
    });
    return tabsToDisplay;
  };

  const makeTabs = (tabsToDisplay) => {
    const tabs = tabsToDisplay.map((tab) => {
      return (
        <li key={tab.name}>
          <Tab tabName={tab.name} />
        </li>
      );
    });
    return tabs;
  };

  const userBusinesses = [{ name: "The Yoga Fairy" }];
  const tabs = makeTabs(getTabsToDisplay(userBusinesses));

  return (
    <>
      <h2>Tabs</h2>
      <ul>{tabs}</ul>
    </>
  );
}

export default TabContainer;
