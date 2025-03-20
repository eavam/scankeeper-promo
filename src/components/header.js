import React from "react";
import { Link, withPrefix } from "gatsby";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src={withPrefix("/logo.svg")}
              alt="ScanKeeper Logo"
              className="logo"
              width="40"
              height="40"
            />
            <span className="logo-text">ScanKeeper</span>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/#features">Features</Link>
            </li>
            <li>
              <Link to="/#download">Download</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
