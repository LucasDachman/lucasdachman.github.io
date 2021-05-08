import React from "react";
import { Link } from "gatsby";

export default ({ current }) => {
  return (
    <nav className="nav-header">
      <Link to="/">Lucas Dachman</Link>
      <NavLink to="/about/" isCurrent={current === "about"}>
        About
      </NavLink>
      <NavLink to="/works/" isCurrent={current === "works"}>
        Works
      </NavLink>
      <NavLink to="/contact/" isCurrent={current === "contact"}>
        Contact
      </NavLink>
    </nav>
  );
};

const NavLink = ({ to, isCurrent, children }) => {
  return (
    <Link to={to} className={isCurrent ? "current" : null}>
      {children}
    </Link>
  );
};
