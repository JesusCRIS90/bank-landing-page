import Logo from "./Logo";

import "../styles/HeaderLogo.css";

function HeaderLogo({ logo }) {
  return (
    <a href="#home" className="header-home-link">
      <div className="header-logo">
        <Logo src={logo.src} />
        <p className="logo-name"> {logo.name} </p>
      </div>
    </a>
  );
}

export default HeaderLogo;
