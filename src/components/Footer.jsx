import { NavBar } from "./NavBar";
import Logo from "./Logo";

import "../styles/Footer.css";

function Footer({ footerInfo }) {
  const logoImage = footerInfo.Logo.src;

  return (
    <footer className="footer-container">
      <NavBar navItems={footerInfo.NavItems} />
      <Logo src={logoImage} />
    </footer>
  );
}

export default Footer;
