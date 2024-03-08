function Icon({ icon }) {
  return (
    <div className="icon">
      <svg>
        <use xlinkHref={icon}></use>
      </svg>
    </div>
  );
}

export default Icon;
