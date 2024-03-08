function GetTabsId(tabs) {
  let tabsId = [];
  tabs.forEach((tab) => {
    tabsId.push(tab.id);
  });
  return tabsId;
}

export { GetTabsId };
