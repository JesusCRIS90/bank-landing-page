import FeatureCard from "../components/FeatureCard";

function RenderTabContent(tabId, renderInfo) {
  switch (tabId) {
    case "tranfers":
      return RenderTranfers(renderInfo);

    case "loans":
      return RenderLoans(renderInfo);

    case "closing":
      return RenderClosing(renderInfo);

    default:
      return <></>;
  }
}

function RenderTranfers(renderInfo) {
  return (
    <>
      <FeatureCard featureInfo={renderInfo} />
    </>
  );
}
function RenderLoans(renderInfo) {
  return (
    <>
      <FeatureCard featureInfo={renderInfo} />
    </>
  );
}
function RenderClosing(renderInfo) {
  return (
    <>
      <FeatureCard featureInfo={renderInfo} />
    </>
  );
}

export { RenderTabContent };
