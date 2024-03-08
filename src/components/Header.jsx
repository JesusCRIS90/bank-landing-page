import HeaderLogo from "./HeaderLogo";
import { NavBar, NavContainer } from "./NavBar";

import "../styles/Header.css";

function Header({ headerInfo }) {
  return (
    <header className="header-bar">
      <HeaderLogo logo={headerInfo.Logo} />
      <NavContainer>
        <NavBar navItems={headerInfo.NavItems} />
      </NavContainer>
    </header>
  );
}

export default Header;
