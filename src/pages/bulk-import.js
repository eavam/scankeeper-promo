import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import GuidePage from "../components/guide-page";
import Seo from "../components/seo";
import {
  getPageI18n,
  translateFields,
} from "../i18n/helpers";

const faq = [
  {
    question: "How many barcode photos can I import at once?",
    answer:
      "ScanKeeper lets you choose up to 50 photos in one bulk import batch.",
  },
  {
    question: "What happens if an image has no readable code?",
    answer:
      "ScanKeeper reviews the selected images and reports which ones contain recognized codes, so you can continue with the successful results.",
  },
  {
    question: "Can I name each imported card separately?",
    answer:
      "Yes. After the batch is scanned, the import flow walks you through reviewing and naming each detected code before saving the collection.",
  },
  {
    question: "Is bulk import useful when switching from another wallet app?",
    answer:
      "Yes. If you can export or capture your existing cards as images or screenshots, bulk import reduces the repetitive work of adding them one at a time.",
  },
];

const BulkImportPage = () => {
  const { t } = useTranslation();
  const localizedFaq = translateFields(t, faq, ["question", "answer"]);

  return (
    <GuidePage
    eyebrow={t("Bulk import guide")}
    title={t("Move a camera roll full of barcodes in one batch.")}
    lede={t(
      "Select up to 50 photos or screenshots, let ScanKeeper detect the supported codes, then review and name the results. It is a faster way to migrate cards or clean up years of saved images.",
    )}
    quickAnswer={t(
      "The bulk import flow scans up to 50 selected images on your device, keeps the recognized QR codes and barcodes, and guides you through naming each card before saving them together.",
    )}
    campaign="guide_bulk_import"
    steps={translateFields(t, [
      {
        title: "Open Bulk import",
        text: "Open Actions and choose Bulk import when the codes you need are already saved as photos or screenshots.",
        visual: "actions",
        focus: "actions-bulk",
        hint: "Bulk import lives with the app's collection tools.",
      },
      {
        title: "Select up to 50 photos",
        text: "Choose the images from your gallery in one pass instead of importing every card separately.",
        visual: "select-photos",
        focus: "select-photos",
        hint: "One batch can contain up to 50 images.",
      },
      {
        title: "Let ScanKeeper scan the batch",
        text: "The app checks each image for supported QR codes and barcodes directly on the device.",
        visual: "checking-photos",
        focus: "checking-photos",
        hint: "Recognition runs locally on the selected photos.",
      },
      {
        title: "Review every result",
        text: "Readable codes arrive with their value. Add a clear name; if a photo cannot be read, fill in the missing value manually or skip it.",
        visual: "import-form",
        focus: "import-fields",
        hint: "Keep the useful result, fix it, or skip the photo.",
      },
      {
        title: "Return to your collection",
        text: "Confirm the useful cards and finish the batch. The imported cards now live in the library with the rest of your collection.",
        visual: "home",
        focus: "home-imported-card",
        hint: "The imported card is ready to search, open, and organize.",
      },
    ], ["title", "text", "hint"])}
    benefits={translateFields(t, [
      {
        icon: "photos",
        title: "Up to 50 images",
        text: "Replace dozens of repetitive one-at-a-time imports with a single photo selection.",
      },
      {
        icon: "scan",
        title: "Guided review",
        text: "Confirm each recognized code and give it context before it enters your collection.",
      },
      {
        icon: "offline",
        title: "Local analysis",
        text: "The scan runs on the device and does not require uploading your barcode images to us.",
      },
    ], ["title", "text"])}
    faq={localizedFaq}
  >
    <section
      className="article-context-block article-context-reverse"
      id="wallet-migration"
    >
      <div>
        <p className="eyebrow">{t("Built for migration")}</p>
        <h2>{t("Moving wallets should not mean scanning every card again")}</h2>
        <p>
          {t(
            "People often keep loyalty codes in a mix of old wallet apps, retailer apps, emails, and screenshots. When those images are already on your phone, re-scanning the physical card adds unnecessary work. Bulk import turns the gallery into a migration source.",
          )}
        </p>
        <p>
          {t(
            "Select a manageable batch, let ScanKeeper identify readable codes, and then add the human details — names, images, and folders — that make the new collection useful.",
          )}
        </p>
      </div>
      <aside className="article-context-card article-context-bulk">
        <strong>50</strong>
        <span>{t("photos")}</span>
        <div>
          <small>{t("one batch")}</small>
          <small>{t("on-device")}</small>
          <small>{t("guided review")}</small>
        </div>
      </aside>
    </section>
    </GuidePage>
  );
};

export default BulkImportPage;

export const query = graphql`
  query BulkImportPage($language: String!) {
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
  const localizedFaq = translateFields(t, faq, ["question", "answer"]);

  return (
    <Seo
    title={t("Bulk Import QR Codes & Barcodes From Photos | ScanKeeper App")}
    description={t(
      "Import up to 50 barcode or QR code photos at once. ScanKeeper analyzes the batch on-device, then helps you review, name, and organize each card.",
    )}
    path="/bulk-import/"
    faq={localizedFaq}
    article
    breadcrumbs={[
      { name: t("Home"), path: "/" },
      { name: t("Bulk import"), path: "/bulk-import/" },
    ]}
    locale={locale}
    t={t}
  />
  );
};
