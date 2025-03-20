import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
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
              <div dangerouslySetInnerHTML={{ __html: policy?.html }} />
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
