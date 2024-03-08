import "../styles/NavBar.css";

function NavContainer({ children }) {
  return <nav>{children}</nav>;
}

function NavBar({ navItems, id = "" }) {
  return (
    <ul className="nav-bar-container" id={id}>
      {navItems.map((navItem) => (
        <NavElement
          id={navItem.name.toLowerCase().replace(" ", "")}
          key={navItem.name}
          element={navItem}
        />
      ))}
    </ul>
  );
}

function NavElement({ element, id = "" }) {
  function onClickHandle(e) {
    e.preventDefault();
    element.handleClick();
  }

  const onClickHandleFcn =
    element.href === undefined ? onClickHandle : element.handleClick;

  return (
    <li className={element.className}>
      <a
        // onClick={element.handleClick}
        onClick={onClickHandleFcn}
        className="nav-item-link"
        href={element.href}
        id={"id-" + id}
      >
        {element.name}
      </a>
    </li>
  );
}

export { NavBar, NavElement, NavContainer };
