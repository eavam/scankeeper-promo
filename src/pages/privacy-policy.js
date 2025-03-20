import React from "react";
import { graphql } from "gatsby";

const PrivacyPolicy = ({ data }) => {
  const policy = data?.markdownRemark;
  
  return (
    <div className="privacy-policy-container">
      <h1>{policy?.frontmatter?.title || "Privacy Policy"}</h1>
      <div dangerouslySetInnerHTML={{ __html: policy?.html }} />
    </div>
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
