import "../styles/OperationsPage.css";

import HeaderSection from "../components/HeaderSection";
import FeatureCard from "../components/FeatureCard";
import TabContainer from "../components/TabContainer";

function OperationsPage({ OperationsInfo }) {
  const headerSec = OperationsInfo.Header;
  const TabsInfo = OperationsInfo.TabInfo;
  return (
    <section className="operations-section" id="operations">
      <HeaderSection HeaderSecInfo={headerSec} />
      <div className="content">
        <TabContainer Info={TabsInfo} className="operation-tabs-container" />
      </div>
    </section>
  );
}

export default OperationsPage;
