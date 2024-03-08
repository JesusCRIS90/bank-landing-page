import Image from "../components/Image";
import FeatureCard from "../components/FeatureCard";

import "../styles/FeatureBody.css";

function FeatureBody({ features }) {
  return (
    <div className="feature-content">
      <Image ImageInfo={features[0].Image} />
      <FeatureCard featureInfo={features[0]} />

      <FeatureCard featureInfo={features[1]} />
      <Image ImageInfo={features[1].Image} />

      <Image ImageInfo={features[2].Image} />
      <FeatureCard featureInfo={features[2]} />
    </div>
  );
}

export default FeatureBody;
