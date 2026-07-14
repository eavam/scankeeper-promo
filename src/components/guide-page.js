import React from "react";
import { Link } from "gatsby";
import FeatureIcon from "./feature-icon";
import Layout from "./layout";
import StoreButtons from "./store-buttons";

const GuidePage = ({
  eyebrow,
  title,
  lede,
  quickAnswer,
  steps,
  benefits,
  faq,
  campaign,
  children,
}) => (
  <Layout>
    <section className="guide-hero">
      <div className="container guide-hero-grid">
        <div>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Guides</span>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-lede">{lede}</p>
          <StoreButtons compact location={campaign} />
        </div>
        <aside className="quick-answer">
          <span>Quick answer</span>
          <p>{quickAnswer}</p>
          <ul>
            <li>
              <FeatureIcon name="check" size={18} /> iPhone &amp; Android
            </li>
            <li>
              <FeatureIcon name="check" size={18} /> Works offline
            </li>
            <li>
              <FeatureIcon name="check" size={18} /> No account needed
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <article className="guide-article">
      <div className="container article-container">
        <section>
          <p className="eyebrow">Step by step</p>
          <h2>How it works in ScanKeeper App</h2>
          <div className="article-steps">
            {steps.map((step, index) => (
              <div key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {children}

        <section>
          <p className="eyebrow">Why it helps</p>
          <h2>Designed around the real-world handoff</h2>
          <div className="article-benefits">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <FeatureIcon name={benefit.icon} size={25} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="article-faq">
          <p className="eyebrow">Common questions</p>
          <h2>What to know before you start</h2>
          {faq.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
      </div>
    </article>

    <section className="related-guides">
      <div className="container">
        <p className="eyebrow">Keep exploring</p>
        <div>
          <Link to="/loyalty-card-wallet/">
            Loyalty card wallet <span>→</span>
          </Link>
          <Link to="/scan-qr-code-from-image/">
            Scan from an image <span>→</span>
          </Link>
          <Link to="/barcode-organizer/">
            Barcode organizer <span>→</span>
          </Link>
          <Link to="/bulk-import/">
            Bulk photo import <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default GuidePage;
