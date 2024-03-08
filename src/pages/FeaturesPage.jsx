import "../styles/FeaturesPage.css";
import HeaderSection from "../components/HeaderSection";

import Image from "../components/Image";
import FeatureCard from "../components/FeatureCard";
import FeatureBody from "../components/FeatureBody";

function FeaturesPage({ FeaturesInfo }) {
  const headerSec = FeaturesInfo.Header;
  const list_features = FeaturesInfo.Features;
  return (
    <section className="features-section" id="features">
      <HeaderSection HeaderSecInfo={headerSec} />
      <FeatureBody features={list_features} />
    </section>
  );
}

export default FeaturesPage;
