import React from "react";
import { withPrefix } from "gatsby";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../constants/site";

const StoreButtons = ({ compact = false, location = "website" }) => (
  <div className={`store-buttons${compact ? " store-buttons-compact" : ""}`}>
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download ScanKeeper on the App Store"
    >
      <img
        src={withPrefix("/app-store-badge.svg")}
        alt="Download on the App Store"
        width="180"
        height="60"
      />
    </a>
    <a
      href={`${GOOGLE_PLAY_URL}&utm_source=scankeeper_website&utm_medium=referral&utm_campaign=${location}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get ScanKeeper on Google Play"
    >
      <img
        src={withPrefix("/google-play-badge.svg")}
        alt="Get it on Google Play"
        width="202"
        height="60"
      />
    </a>
  </div>
);

export default StoreButtons;
