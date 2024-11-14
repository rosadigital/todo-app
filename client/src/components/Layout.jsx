import React from "react";
import logo from "../assets/logo_1.png";

const Layout = () => {
  return (
    <header>
      <div className="banner">
        <a href="/">
          <img
            src={logo}
            alt="Group 3"
            className="logo00"
            style={{ width: 90, height: "auto", marginRight: 20 }}
          />
        </a>
        <div className="banner-text roboto-thin">
          <h1 className="header-text-1">Group 3</h1>
          <p className="occupation">The Third Wave</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
