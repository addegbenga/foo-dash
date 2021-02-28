import React from "react";
import logo from "../img/logo.svg";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <img src={logo} alt="logo" />
        <i className="fa fa-bars bar"></i>
      </div>
    </div>
  );
}
