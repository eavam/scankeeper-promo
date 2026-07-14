import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/global.css";

const PrivacyPolicy = ({ data }) => {
  const policy = data?.markdownRemark;

  return (
    <Layout>
      <div className="policy-page">
        <div className="container policy-content">
          <div className="policy-text">
            <article>
              <h1>{policy?.frontmatter?.title || "Privacy Policy"}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: policy?.html }}
                className="policy-html-content"
              />
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/privacy-policy" } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default PrivacyPolicy;

export const Head = () => (
  <Seo
    title="ScanKeeper Privacy Policy & Terms of Service"
    description="Learn how ScanKeeper stores barcode data, uses optional iCloud sync, analytics, advertising, crash reporting, and subscriptions."
    path="/privacy-policy/"
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy/" },
    ]}
  />
);
