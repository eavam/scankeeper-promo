import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = [
  { to: "/#features", label: "Features" },
  { to: "/#how-it-works", label: "How it works" },
  { to: "/loyalty-card-wallet/", label: "Guides" },
  { to: "/support/", label: "Support" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isMenuOpen ? " menu-is-open" : ""}`}>
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          aria-label={t("ScanKeeper App home")}
          onClick={closeMenu}
        >
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

        <nav className="desktop-nav" aria-label={t("Main navigation")}>
          {links.map(({ to, label }) => (
            <Link to={to} key={to}>
              {t(label)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            to="/#download"
            className="button button-small button-dark header-cta"
            onClick={closeMenu}
          >
            {t("Get the app")}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? t("Close menu") : t("Open menu")}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <IconX aria-hidden="true" size={22} stroke={2} />
            ) : (
              <IconMenu2 aria-hidden="true" size={22} stroke={2} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav-wrap" id="mobile-navigation">
          <nav
            className="container mobile-nav"
            aria-label={t("Mobile navigation")}
          >
            <p>{t("Explore ScanKeeper")}</p>
            {links.map(({ to, label }, index) => (
              <Link to={to} onClick={closeMenu} key={to}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {t(label)}
              </Link>
            ))}
            <div className="mobile-nav-note">
              <b>{t("Free. No card limits.")}</b>
              <span>{t("Available for iPhone, iPad, and Android.")}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
