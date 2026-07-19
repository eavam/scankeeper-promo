import React from "react";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import Footer from "./footer";
import Header from "./header";
import MotionEnhancer from "./motion-enhancer";
import { useI18next } from "gatsby-plugin-react-i18next";
import localeConfig from "../i18n/locales";
import "../styles/global.css";

const { getLocale } = localeConfig;

const Layout = ({ children }) => {
  const { language, t } = useI18next();
  const { direction, locale } = getLocale(language);

  return (
    <div className="layout" dir={direction} lang={locale}>
      <a className="skip-link" href="#main-content">
        {t("Skip to content")}
      </a>
      <Header />
      <MotionEnhancer />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
