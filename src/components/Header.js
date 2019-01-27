/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <nav className="navbar p-4 mb-5">
      <a href="#" className="navbar-brand">
        <img src={logo} alt="huddle logo" />
      </a>
      <button type="button" className="btn btn-light">
        Try it out
      </button>
    </nav>
  );
};

export default Header;
