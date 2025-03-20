import React from "react";
import { graphql } from "gatsby";
import "../styles/global.css";
import Layout from "../components/layout";

const MarkdownPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="policy-content">
        <div className="container">
          <div className="policy-navigation">
            <ul>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div
            className="policy-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MarkdownPage;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        path
      }
    }
  }
`;

export const Head = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} - ScanKeeper</title>
    <meta
      name="description"
      content="Privacy Policy and Terms of Service for ScanKeeper - an app for scanning and organizing QR codes and barcodes."
    />
  </>
);
