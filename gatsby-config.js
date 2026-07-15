// @ts-check

/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `ScanKeeper App — Loyalty Card Wallet`,
    description: `An offline loyalty card wallet, QR scanner, and barcode organizer for iPhone and Android.`,
    siteUrl: `https://scankeeper.nomadixapps.org`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
  ],
};
