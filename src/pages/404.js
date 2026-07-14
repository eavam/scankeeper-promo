import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <section className="simple-hero not-found">
      <div className="container narrow-container">
        <p className="eyebrow">Error 404</p>
        <h1>This code does not point anywhere.</h1>
        <p>The page may have moved, but your route back is one tap away.</p>
        <Link className="button button-dark" to="/">
          Go to ScanKeeper home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = () => (
  <Seo
    title="Page not found | ScanKeeper"
    description="This ScanKeeper page could not be found."
    path="/404/"
  />
);
