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
    question: "Can I scan a QR code from a screenshot on the same phone?",
    answer:
      "Yes. Save or take the screenshot, open ScanKeeper, choose the gallery option, and select the image. You do not need a second device.",
  },
  {
    question: "Can ScanKeeper read barcodes as well as QR codes from photos?",
    answer:
      "Yes. ScanKeeper analyzes images for supported QR and barcode formats, including common EAN, UPC, Code 128, PDF417, Data Matrix, and Aztec codes.",
  },
  {
    question: "Can I import more than one screenshot?",
    answer:
      "Yes. The bulk import flow lets you select up to 50 photos, scans them as a batch, and then walks you through naming the detected codes.",
  },
  {
    question: "Does image scanning need an internet connection?",
    answer:
      "No. Image analysis runs on the device and does not require an account or an internet connection.",
  },
];

const ScanFromImagePage = () => {
  const { t } = useTranslation();
  const localizedFaq = translateFields(t, faq, ["question", "answer"]);

  return (
    <GuidePage
    eyebrow={t("Scan from image guide")}
    title={t("Scan a QR code from a screenshot or saved photo.")}
    lede={t(
      "The code is already on your phone — so there is nothing to point the camera at. ScanKeeper can analyze an image from your gallery, extract its QR code or barcode, and save it for later.",
    )}
    quickAnswer={t(
      "Choose a screenshot or photo from inside ScanKeeper. The app analyzes the image on your device, recognizes supported codes, and lets you save the result as a named card.",
    )}
    campaign="guide_scan_from_image"
    steps={translateFields(t, [
      {
        title: "Open the scanner",
        text: "Save the screenshot or photo to your gallery, then open ScanKeeper and tap the scanner button.",
        visual: "home",
        focus: "home-scan",
        hint: "The same scanner handles the camera and saved images.",
      },
      {
        title: "Choose Gallery",
        text: "Use the photo control at the top of the scanner instead of pointing the camera at another screen.",
        visual: "scanner",
        focus: "scanner-gallery",
        hint: "Choose an existing image from the same phone.",
      },
      {
        title: "Review the detected code",
        text: "Pick the image. ScanKeeper analyzes it locally, then shows the recognized format and value for review.",
        visual: "scan-result",
        focus: "scan-result-details",
        hint: "Check the detected type and encoded value.",
      },
      {
        title: "Save it as a named card",
        text: "Add a useful name, choose a folder if needed, and save the result so it is easier to find than the original screenshot.",
        visual: "scan-result",
        focus: "scan-result-save",
        hint: "Save turns a one-off scan into a reusable card.",
      },
    ], ["title", "text", "hint"])}
    benefits={translateFields(t, [
      {
        icon: "photos",
        title: "No second phone needed",
        text: "Analyze a code displayed in an email, message, PDF screenshot, or saved photo on the same device.",
      },
      {
        icon: "offline",
        title: "On-device detection",
        text: "Image scanning works locally, without sending the barcode to a ScanKeeper server.",
      },
      {
        icon: "folders",
        title: "Useful after the first scan",
        text: "Save the result with a name and folder instead of leaving it buried in Photos.",
      },
    ], ["title", "text"])}
    faq={localizedFaq}
  >
    <section className="article-context-block article-context-reverse">
      <div>
        <p className="eyebrow">{t("More than a one-time reader")}</p>
        <h2>{t("Turn a screenshot into something you can find again")}</h2>
        <p>
          {t(
            "QR screenshots tend to disappear among receipts, memes, and camera photos. A scan history is not much better when every result looks like an unfamiliar string. ScanKeeper lets you convert the detected code into a recognizable card with a name, image, color, and folder.",
          )}
        </p>
        <p>
          {t(
            "This works well for event tickets, loyalty cards sent by email, gym memberships, travel documents, coupons, and any other supported code you expect to show again.",
          )}
        </p>
      </div>
      <aside className="article-context-card article-context-image">
        <span>{t("SCREENSHOT")}</span>
        <span className="article-context-arrow" aria-hidden="true">→</span>
        <strong>{t("Named card")}</strong>
        <small>{t("Same phone. No second camera.")}</small>
      </aside>
    </section>
    </GuidePage>
  );
};

export default ScanFromImagePage;

export const query = graphql`
  query ScanFromImagePage($language: String!) {
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
    title={t("How to Scan a QR Code From a Screenshot or Image | ScanKeeper App")}
    description={t(
      "Scan a QR code or barcode from a screenshot on the same phone. Import one image or up to 50 photos, then save and organize each detected code.",
    )}
    path="/scan-qr-code-from-image/"
    faq={localizedFaq}
    article
    breadcrumbs={[
      { name: t("Home"), path: "/" },
      { name: t("Scan QR code from image"), path: "/scan-qr-code-from-image/" },
    ]}
    locale={locale}
    t={t}
  />
  );
};
