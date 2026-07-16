import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getPageI18n } from "../i18n/helpers";
import "../styles/global.css";

const PrivacyPolicy = ({ data, pageContext }) => {
  const policy = data?.markdownRemark;
  const { t } = useTranslation();
  const policyHtml = policy?.html;

  return (
    <Layout>
      <div className="policy-page">
        <div className="container policy-content">
          <div className="policy-text">
            {policyHtml ? (
              <div
                dangerouslySetInnerHTML={{ __html: policyHtml }}
                className="policy-html-content"
              />
            ) : (
              <article>
                <h1>{t("Privacy Policy")}</h1>
              </article>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PrivacyPolicyPage($language: String!) {
    markdownRemark(frontmatter: { path: { eq: "/privacy-policy" } }) {
      html
      frontmatter {
        title
        path
      }
    }
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

export default PrivacyPolicy;

export const Head = ({ data, pageContext }) => {
  const { locale, t } = getPageI18n(data, pageContext);

  return (
    <Seo
    title={t("ScanKeeper App Privacy Policy & Terms of Service")}
    description={t(
      "Learn how ScanKeeper stores barcode data, uses optional iCloud sync, analytics, advertising, crash reporting, and subscriptions.",
    )}
    path="/privacy-policy/"
    breadcrumbs={[
      { name: t("Home"), path: "/" },
      { name: t("Privacy Policy"), path: "/privacy-policy/" },
    ]}
    locale={locale}
    t={t}
  />
  );
};
