// @ts-check

const {
  DEFAULT_LOCALE,
  LOCALES,
  localizePath,
  stripLocaleFromPath,
} = require("./src/i18n/locales");

const SITE_URL = "https://scankeeper.nomadixapps.org";
const SITEMAP_RULES = new Map([
  ["/", { changefreq: "monthly", priority: 1 }],
  ["/loyalty-card-wallet/", { changefreq: "monthly", priority: 0.9 }],
  ["/scan-qr-code-from-image/", { changefreq: "monthly", priority: 0.9 }],
  ["/barcode-organizer/", { changefreq: "monthly", priority: 0.9 }],
  ["/bulk-import/", { changefreq: "monthly", priority: 0.8 }],
  ["/support/", { changefreq: "monthly", priority: 0.6 }],
  ["/privacy-policy/", { changefreq: "yearly", priority: 0.3 }],
]);

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `ScanKeeper App — Loyalty Card Wallet`,
    description: `An offline loyalty card wallet, QR scanner, and barcode organizer for iPhone and Android.`,
    siteUrl: SITE_URL,
    author: `Nomadix Apps LLC`,
    image: `/social-card.png`,
  },
  trailingSlash: `always`,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/i18n/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: LOCALES.map(({ locale }) => locale),
        defaultLanguage: DEFAULT_LOCALE,
        siteUrl: SITE_URL,
        trailingSlash: `always`,
        redirect: false,
        i18nextOptions: {
          fallbackLng: DEFAULT_LOCALE,
          keySeparator: false,
          nsSeparator: false,
          returnEmptyString: false,
          interpolation: {
            escapeValue: false,
            prefix: `{`,
            suffix: `}`,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 50000,
        createLinkInHead: true,
        excludes: [`/**/404/`, `/**/404.html`],
        resolvePages: ({ allSitePage: { nodes } }) =>
          nodes
            .map((page) => ({
              ...page,
              originalPath: stripLocaleFromPath(page.path),
            }))
            .filter(({ originalPath }) => SITEMAP_RULES.has(originalPath)),
        serialize: ({ path, originalPath }) => ({
          url: path,
          ...SITEMAP_RULES.get(originalPath),
          links: [
            ...LOCALES.map(({ locale }) => ({
              lang: locale,
              url: `${SITE_URL}${localizePath(originalPath, locale)}`,
            })),
            {
              lang: `x-default`,
              url: `${SITE_URL}${originalPath}`,
            },
          ],
        }),
      },
    },
    `gatsby-transformer-remark`,
  ],
};
