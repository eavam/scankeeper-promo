import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getPageI18n } from "../i18n/helpers";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
    <section className="simple-hero not-found">
      <div className="container narrow-container">
        <p className="eyebrow">{t("Error 404")}</p>
        <h1>{t("This code does not point anywhere.")}</h1>
        <p>{t("The page may have moved, but your route back is one tap away.")}</p>
        <Link className="button button-dark" to="/">
          {t("Go to ScanKeeper home")}
        </Link>
      </div>
    </section>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = ({ data, pageContext }) => {
  const { locale, t } = getPageI18n(data, pageContext);

  return (
    <Seo
    title={t("Page not found | ScanKeeper App")}
    description={t("This ScanKeeper page could not be found.")}
    path="/404/"
    locale={locale}
    t={t}
  />
  );
};
