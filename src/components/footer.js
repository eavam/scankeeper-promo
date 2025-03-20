import React from "react";
import { Link, withPrefix } from "gatsby";

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
                <Link to="/">Home</Link>
              </li>
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
                <Link to="/privacy-policy#terms-of-service">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy#contact-us">Contact Us</Link>
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
