import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-column">
            <h3>ScanKeeper</h3>
            <ul>
              <li>
                <Link to="/#features">Features</Link>
              </li>
              <li>
                <Link to="/#download">Download</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy#terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2023-{currentYear} ScanKeeper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
