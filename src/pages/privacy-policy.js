import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/global.css";

const PrivacyPolicy = ({ data }) => {
  const policy = data?.markdownRemark;
  const [activeSection, setActiveSection] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Определение активного раздела при прокрутке
      const sections = document.querySelectorAll(".policy-text h2");
      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const id =
          section.id ||
          section.textContent.trim().toLowerCase().replace(/\s+/g, "-");

        if (window.scrollY >= top) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="policy-page">
        <div
          className={`policy-navigation ${
            scrollPosition > 150 ? "sticky" : ""
          }`}
        >
          <div className="container">
            <h2>Contents</h2>
            <ul>
              <li>
                <a
                  href="#introduction"
                  className={activeSection === "introduction" ? "active" : ""}
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#information-we-collect"
                  className={
                    activeSection === "information-we-collect" ? "active" : ""
                  }
                >
                  Information We Collect
                </a>
              </li>
              <li>
                <a
                  href="#how-we-use-your-information"
                  className={
                    activeSection === "how-we-use-your-information"
                      ? "active"
                      : ""
                  }
                >
                  How We Use Your Information
                </a>
              </li>
              <li>
                <a
                  href="#legal-basis"
                  className={activeSection === "legal-basis" ? "active" : ""}
                >
                  Legal Basis
                </a>
              </li>
              <li>
                <a
                  href="#data-retention"
                  className={activeSection === "data-retention" ? "active" : ""}
                >
                  Data Retention
                </a>
              </li>
            </ul>
          </div>
        </div>

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
