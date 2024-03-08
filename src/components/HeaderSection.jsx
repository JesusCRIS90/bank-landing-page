import "../styles/HeaderSection.css";

function HeaderSection({ HeaderSecInfo }) {
  return (
    <div className="section-title">
      <h2>{HeaderSecInfo.Title}</h2>
      <h3>{HeaderSecInfo.Subtitle}</h3>
    </div>
  );
}

export default HeaderSection;
