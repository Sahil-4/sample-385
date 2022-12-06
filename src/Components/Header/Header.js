import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo_container">
        <h2 className="title">Logo</h2>
      </div>

      <div className={`header_navbar_container`}>
        <span className="header_navbar_container_active" href="/">
          Home
        </span>
        <span>Products</span>
        <span>About Us</span>
      </div>
    </header>
  );
};

export default Header;
