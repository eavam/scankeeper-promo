export const SITE_URL = "https://scankeeper.nomadixapps.org";

export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6742491694?pt=127661831&ct=homepage&mt=8";

export const APP_STORE_PROVIDER_TOKEN =
  process.env.GATSBY_APP_STORE_PROVIDER_TOKEN || "";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.scankeeperapp.scankeeper";

export const SUPPORT_EMAIL = "info@nomadixapps.org";

export const APP_NAME = "ScanKeeper";

export const SITE_NAME = "ScanKeeper App";

export const getAppStoreUrl = () => APP_STORE_URL;

export const getGooglePlayUrl = (location = "website") =>
  `${GOOGLE_PLAY_URL}&utm_source=scankeeper_website&utm_medium=referral&utm_campaign=${encodeURIComponent(location)}`;
