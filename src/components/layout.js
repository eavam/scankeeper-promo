import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/global.css";

const Layout = ({ children }) => (
  <div className="layout">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
