import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { IconChevronDown, IconWorld } from "@tabler/icons-react";
import { SUPPORT_EMAIL } from "../constants/site";
import localeConfig from "../i18n/locales";

const { LOCALES, getLocale, localizePath } = localeConfig;

const getLanguageLabel = ({ nativeName, englishName }) =>
  nativeName === englishName ? nativeName : `${nativeName} — ${englishName}`;

const LanguageSelector = () => {
  const { language, t } = useI18next();
  const activeLocale = getLocale(language);

  const handleLanguageChange = (event) => {
    const targetLocale = event.target.value;
    if (targetLocale === language || typeof window === "undefined") return;

    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.assign(localizePath(currentUrl, targetLocale));
  };

  return (
    <label className="language-selector">
      <IconWorld aria-hidden="true" size={20} stroke={1.8} />
      <span className="language-selector-copy">
        <small>{t("Language")}</small>
        <strong>
          {activeLocale.nativeName}
          {activeLocale.nativeName !== activeLocale.englishName && (
            <span lang="en">{activeLocale.englishName}</span>
          )}
        </strong>
      </span>
      <IconChevronDown
        className="language-selector-chevron"
        aria-hidden="true"
        size={18}
        stroke={1.8}
      />
      <select
        aria-label={t("Change language")}
        onChange={handleLanguageChange}
        value={language}
      >
        {LOCALES.map((item) => (
          <option value={item.locale} lang={item.locale} key={item.locale}>
            {getLanguageLabel(item)}
          </option>
        ))}
      </select>
    </label>
  );
};

const Footer = () => {
  const { t } = useI18next();

  return (
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
            <span>ScanKeeper App</span>
            </Link>
            <p>
              {t(
                "A fast, flexible wallet for the barcodes and QR codes you actually use.",
              )}
            </p>
          </div>

          <div>
            <h2>{t("Product")}</h2>
            <Link to="/#features">{t("Features")}</Link>
            <Link to="/#how-it-works">{t("How it works")}</Link>
            <Link to="/#download">{t("Download")}</Link>
            <Link to="/support/">{t("Support")}</Link>
          </div>

          <div>
            <h2>{t("Guides")}</h2>
            <Link to="/loyalty-card-wallet/">
              {t("Loyalty card wallet")}
            </Link>
            <Link to="/scan-qr-code-from-image/">
              {t("Scan from an image")}
            </Link>
            <Link to="/barcode-organizer/">
              {t("Barcode organizer")}
            </Link>
            <Link to="/bulk-import/">{t("Bulk import")}</Link>
          </div>

          <div>
            <h2>{t("Company")}</h2>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{t("Contact us")}</a>
            <Link to="/privacy-policy/">
              {t("Privacy & terms")}
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2023–{new Date().getFullYear()} Nomadix Apps LLC.</span>
            <span>{t("Made for iPhone, iPad, and Android.")}</span>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
