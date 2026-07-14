import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SUPPORT_EMAIL } from "../constants/site";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-footer">
            <StaticImage
              src="../images/app-icon.png"
              alt=""
              placeholder="none"
              width={44}
              height={44}
            />
            <span>ScanKeeper</span>
          </Link>
          <p>
            A fast, flexible wallet for the barcodes and QR codes you actually
            use.
          </p>
        </div>

        <div>
          <h2>Product</h2>
          <Link to="/#features">Features</Link>
          <Link to="/#how-it-works">How it works</Link>
          <Link to="/#download">Download</Link>
          <Link to="/support/">Support</Link>
        </div>

        <div>
          <h2>Guides</h2>
          <Link to="/loyalty-card-wallet/">Loyalty card wallet</Link>
          <Link to="/scan-qr-code-from-image/">Scan from an image</Link>
          <Link to="/barcode-organizer/">Barcode organizer</Link>
          <Link to="/bulk-import/">Bulk import</Link>
        </div>

        <div>
          <h2>Company</h2>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact us</a>
          <Link to="/privacy-policy/">Privacy &amp; terms</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2023–{new Date().getFullYear()} Nomadix Apps LLC.</span>
        <span>Made for iPhone, iPad, and Android.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
