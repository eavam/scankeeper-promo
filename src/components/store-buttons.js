import React from "react";
import { withPrefix } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getAppStoreUrl, getGooglePlayUrl } from "../constants/site";

const StoreButtons = ({ compact = false, location = "website" }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`store-buttons${compact ? " store-buttons-compact" : ""}`}
    >
      <a
        href={getAppStoreUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("Download ScanKeeper on the App Store")}
      >
        <img
          src={withPrefix("/app-store-badge.svg")}
          alt={t("Download on the App Store")}
          width="180"
          height="60"
        />
      </a>
      <a
        href={getGooglePlayUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("Get ScanKeeper on Google Play")}
      >
        <img
          src={withPrefix("/google-play-badge.svg")}
          alt={t("Get it on Google Play")}
          width="202"
          height="60"
        />
      </a>
    </div>
  );
};

export default StoreButtons;
