import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => (
  <header className="site-header">
    <div className="container header-inner">
      <Link to="/" className="brand" aria-label="ScanKeeper App home">
        <StaticImage
          src="../images/app-icon.png"
          alt=""
          placeholder="none"
          width={48}
          height={48}
          loading="eager"
          className="brand-icon"
        />
        <span>ScanKeeper App</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <Link to="/#features">Features</Link>
        <Link to="/#how-it-works">How it works</Link>
        <Link to="/loyalty-card-wallet/">Guides</Link>
        <Link to="/support/">Support</Link>
      </nav>

      <Link to="/#download" className="button button-small button-dark">
        Get the app
      </Link>
    </div>
  </header>
);

export default Header;
