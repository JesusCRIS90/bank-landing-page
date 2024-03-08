import OpenAccountForm from "../forms/OpenAccountForm";

function RenderModalWindow(tabId, renderInfo) {
  switch (tabId) {
    case "openAccount":
      return RenderOpenAccount(renderInfo);

    default:
      return <></>;
  }
}

function RenderOpenAccount(renderInfo) {
  return (
    <>
      <OpenAccountForm Data={renderInfo} />
    </>
  );
}

export { RenderModalWindow };
