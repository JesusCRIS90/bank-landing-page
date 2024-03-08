import Icon from "./Icon";

import "../styles/FeatureCard.css";

function FeatureCard({ featureInfo }) {
  const icon = featureInfo.Icon;
  const className = featureInfo.ClassName;
  return (
    <div className={className}>
      <Icon icon={icon} />
      <h5>{featureInfo.Title}</h5>
      <p>{featureInfo.Text}</p>
    </div>
  );
}

export default FeatureCard;
