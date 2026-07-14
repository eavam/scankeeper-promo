export const SITE_URL = "https://scankeeper.nomadixapps.org";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/scankeeper-loyalty-wallet/id6742491694";

export const APP_STORE_PROVIDER_TOKEN =
  process.env.GATSBY_APP_STORE_PROVIDER_TOKEN || "";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.scankeeperapp.scankeeper";

export const SUPPORT_EMAIL = "info@nomadixapps.org";

export const APP_NAME = "ScanKeeper";

export const SITE_NAME = "ScanKeeper App";

const campaignToken = (location) =>
  `sk_${location}`.replace(/[^a-zA-Z0-9_.-]/g, "_").slice(0, 30);

export const getAppStoreUrl = (location = "website") => {
  const parameters = [
    `ct=${encodeURIComponent(campaignToken(location))}`,
    "mt=8",
  ];

  if (APP_STORE_PROVIDER_TOKEN) {
    parameters.unshift(`pt=${encodeURIComponent(APP_STORE_PROVIDER_TOKEN)}`);
  }

  return `${APP_STORE_URL}?${parameters.join("&")}`;
};

export const getGooglePlayUrl = (location = "website") =>
  `${GOOGLE_PLAY_URL}&utm_source=scankeeper_website&utm_medium=referral&utm_campaign=${encodeURIComponent(location)}`;
