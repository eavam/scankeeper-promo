import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <StaticImage
              src="../images/logo.png"
              alt="ScanKeeper Logo"
              placeholder="blurred"
              width={40}
              height={40}
              objectFit="contain"
              className="logo"
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
