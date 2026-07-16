import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import FeatureIcon from "../components/feature-icon";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { SUPPORT_EMAIL } from "../constants/site";
import { getPageI18n } from "../i18n/helpers";

const SupportPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
    <section className="simple-hero">
      <div className="container narrow-container">
        <p className="eyebrow">{t("ScanKeeper App support")}</p>
        <h1>{t("How can we help?")}</h1>
        <p>
          {t(
            "Start with the quick answers below. If something is not working, email us with your device type, operating-system version, and a short description of what happened.",
          )}
        </p>
        <a className="button button-dark" href={`mailto:${SUPPORT_EMAIL}`}>
          {t("Email {email}", { email: SUPPORT_EMAIL })}
        </a>
      </div>
    </section>

    <section className="section support-section">
      <div className="container support-grid">
        <div className="support-nav">
          <h2>{t("Popular topics")}</h2>
          <a href="#offline">{t("Offline use")}</a>
          <a href="#photos">{t("Photos & screenshots")}</a>
          <a href="#icloud">{t("iCloud sync")}</a>
          <a href="#export">{t("CSV export")}</a>
          <a href="#purchases">{t("Pro purchases")}</a>
          <a href="#privacy">{t("Privacy")}</a>
        </div>
        <div className="support-answers">
          <article id="offline">
            <FeatureIcon name="offline" size={28} />
            <h2>{t("Does ScanKeeper work offline?")}</h2>
            <p>
              {t(
                "Scanning, saving, organizing, and displaying your saved codes work without an internet connection. Store pages, purchases, ads, iCloud sync, and some external actions naturally require a connection.",
              )}
            </p>
          </article>
          <article id="photos">
            <FeatureIcon name="photos" size={28} />
            <h2>{t("How do I scan a code from a screenshot?")}</h2>
            <p>
              {t(
                "Open the scanner, choose the gallery option, and select the image. For several images, use bulk import to choose up to 50 photos. See the",
              )}{" "}
              <Link to="/scan-qr-code-from-image/">
                {t("step-by-step image guide")}
              </Link>
              .
            </p>
          </article>
          <article id="icloud">
            <FeatureIcon name="cloud" size={28} />
            <h2>{t("How does iCloud sync work?")}</h2>
            <p>
              {t(
                "iCloud sync is optional and available on iPhone and iPad. Enable it in Settings to sync the collection through your Apple iCloud account. Android does not use iCloud.",
              )}
            </p>
          </article>
          <article id="export">
            <FeatureIcon name="export" size={28} />
            <h2>{t("Can I export my cards?")}</h2>
            <p>
              {t(
                "Use CSV export from the app to create a spreadsheet-friendly copy of saved barcode information. Images are stored separately in the app and are not embedded in CSV.",
              )}
            </p>
          </article>
          <article id="purchases">
            <FeatureIcon name="check" size={28} />
            <h2>{t("How do I restore ScanKeeper Pro?")}</h2>
            <p>
              {t(
                "Open Settings and choose Restore Purchases while signed in to the same App Store or Google Play account used for the original purchase. If restoration fails, check the network and try again before contacting support.",
              )}
            </p>
          </article>
          <article id="privacy">
            <FeatureIcon name="offline" size={28} />
            <h2>{t("Where is my barcode data stored?")}</h2>
            <p>
              {t(
                "Barcode content, names, folders, and images are stored in the app on your device. Optional iCloud sync uses your own Apple account. The full privacy policy is available from the site footer.",
              )}
            </p>
          </article>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default SupportPage;

export const query = graphql`
  query SupportPage($language: String!) {
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
    title={t("ScanKeeper App Support — Help With Scanning, Sync & Purchases")}
    description={t(
      "Get help with ScanKeeper barcode scanning, image import, offline use, iCloud sync, CSV export, privacy, and restoring Pro purchases.",
    )}
    path="/support/"
    breadcrumbs={[
      { name: t("Home"), path: "/" },
      { name: t("Support"), path: "/support/" },
    ]}
    locale={locale}
    t={t}
  />
  );
};
