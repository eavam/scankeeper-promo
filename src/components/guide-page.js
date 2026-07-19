import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import FeatureIcon from "./feature-icon";
import GuideSteps from "./guide-steps";
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
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
    <section className="guide-hero">
      <div className="container guide-hero-grid">
        <div>
          <nav className="breadcrumbs" aria-label={t("Breadcrumb")}>
            <Link to="/">{t("Home")}</Link>
            <span aria-hidden="true">/</span>
            <span>{t("Guides")}</span>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-lede">{lede}</p>
          <StoreButtons compact location={campaign} />
        </div>
        <aside className="quick-answer">
          <span>{t("Quick answer")}</span>
          <p>{quickAnswer}</p>
          <ul>
            <li>
              <FeatureIcon name="check" size={18} /> {t("iPhone & Android")}
            </li>
            <li>
              <FeatureIcon name="check" size={18} /> {t("Works offline")}
            </li>
            <li>
              <FeatureIcon name="check" size={18} /> {t("No account needed")}
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <article className="guide-article">
      <div className="container article-container">
        <section>
          <p className="eyebrow">{t("Step by step")}</p>
          <h2>{t("How it works in ScanKeeper App")}</h2>
          <GuideSteps steps={steps} />
        </section>

        {children}

        <section>
          <p className="eyebrow">{t("Why it helps")}</p>
          <h2>{t("Designed around the real-world handoff")}</h2>
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
          <p className="eyebrow">{t("Common questions")}</p>
          <h2>{t("What to know before you start")}</h2>
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
        <p className="eyebrow">{t("Keep exploring")}</p>
        <div>
          <Link to="/loyalty-card-wallet/">
            {t("Loyalty card wallet")} <span>→</span>
          </Link>
          <Link to="/scan-qr-code-from-image/">
            {t("Scan from an image")} <span>→</span>
          </Link>
          <Link to="/barcode-organizer/">
            {t("Barcode organizer")} <span>→</span>
          </Link>
          <Link to="/bulk-import/">
            {t("Bulk photo import")} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default GuidePage;
