import React from "react";
import Footer from "./footer";
import Header from "./header";
import MotionEnhancer from "./motion-enhancer";
import "../styles/global.css";

const Layout = ({ children }) => (
  <div className="layout">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Header />
    <MotionEnhancer />
    <main id="main-content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
