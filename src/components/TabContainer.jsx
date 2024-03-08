import { GetTabsId } from "../utils/utilitiesFunctions";
import { RenderTabContent } from "../renders/RenderTabContent";

import "../styles/TabContainer.css";
import { useState } from "react";

function TabContainer({ className = "", Info }) {
  const [currentTabId, setCurrentTabId] = useState(GetFirstId(Info.Tabs));

  function UpdateTabContainer(id) {
    setCurrentTabId(id);
  }

  const TabNavInfo = {
    ...Info,
    TabFunc: UpdateTabContainer,
    activeId: currentTabId,
  };
  const DataAssociated2Id = GetDataAssociatedToTab(Info.Tabs, currentTabId);

  return (
    <div className={className}>
      <TabOptions TabsInfo={TabNavInfo} />
      <div className="tab-container">
        {RenderTabContent(currentTabId, DataAssociated2Id)}
      </div>
    </div>
  );
}

function TabOptions({ TabsInfo }) {
  // console.log(TabsInfo);
  const Tabs = TabsInfo.Tabs;

  return (
    <div className="tabs">
      {Tabs.map((tab) => (
        <Tab
          key={tab.id}
          TabInfo={{
            ...tab,
            TabFunc: TabsInfo.TabFunc,
            activeId: TabsInfo.activeId,
          }}
        />
      ))}
    </div>
  );
}

function Tab({ TabInfo }) {
  // console.log(TabInfo);

  const tabId = TabInfo.id;
  const onClickTabFunc = TabInfo.TabFunc;

  const className = TabInfo.activeId === tabId ? "tab tab-active" : "tab";

  function onClickHandle(tabId) {
    onClickTabFunc(tabId);
  }

  return (
    <>
      <button
        onClick={() => {
          onClickHandle(tabId);
        }}
        className={className}
        id={tabId}
      >
        {TabInfo.text}
      </button>
    </>
  );
}

function GetDataAssociatedToTab(tabInfo, id) {
  let data = undefined;

  tabInfo.forEach(function (tab) {
    if (tab.id === id) {
      data = tab.data;
    }
  });
  return data;
}

function GetFirstId(tabsInfo) {
  return tabsInfo[0].id;
}

export default TabContainer;
