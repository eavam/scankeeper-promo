import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GuidePage from "../components/guide-page";
import Seo from "../components/seo";

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

const BulkImportPage = () => (
  <GuidePage
    eyebrow="Bulk import guide"
    title="Move a camera roll full of barcodes in one batch."
    lede="Select up to 50 photos or screenshots, let ScanKeeper detect the supported codes, then review and name the results. It is a faster way to migrate cards or clean up years of saved images."
    quickAnswer="The bulk import flow scans up to 50 selected images on your device, keeps the recognized QR codes and barcodes, and guides you through naming each card before saving them together."
    campaign="guide_bulk_import"
    steps={[
      {
        title: "Collect the images",
        text: "Save screenshots or photos of the cards and codes you want to bring into ScanKeeper.",
      },
      {
        title: "Start bulk import",
        text: "Choose the multiple-photo import option and select up to 50 images from the gallery.",
      },
      {
        title: "Let ScanKeeper analyze the batch",
        text: "The app checks each image for supported QR codes and barcodes directly on the device.",
      },
      {
        title: "Review, name, and save",
        text: "Walk through the recognized results, add useful names, and place the cards in the right collection.",
      },
    ]}
    benefits={[
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
    ]}
    faq={faq}
  >
    <section className="article-media-block article-media-reverse">
      <div>
        <p className="eyebrow">Built for migration</p>
        <h2>Moving wallets should not mean scanning every card again</h2>
        <p>
          People often keep loyalty codes in a mix of old wallet apps, retailer
          apps, emails, and screenshots. When those images are already on your
          phone, re-scanning the physical card adds unnecessary work. Bulk
          import turns the gallery into a migration source.
        </p>
        <p>
          Select a manageable batch, let ScanKeeper identify readable codes, and
          then add the human details — names, images, and folders — that make
          the new collection useful.
        </p>
      </div>
      <div className="article-phone">
        <StaticImage
          src="../images/app-bulk-import.png"
          alt="ScanKeeper bulk importer for up to 50 barcode and QR photos"
          placeholder="blurred"
          width={340}
          sizes="(max-width: 600px) 300px, 340px"
          quality={84}
          formats={["auto", "webp"]}
        />
      </div>
    </section>
  </GuidePage>
);

export default BulkImportPage;

export const Head = () => (
  <Seo
    title="Bulk Import QR Codes & Barcodes From Photos | ScanKeeper"
    description="Import up to 50 barcode or QR code photos at once. ScanKeeper analyzes the batch on-device, then helps you review, name, and organize each card."
    path="/bulk-import/"
    faq={faq}
    article
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Bulk import", path: "/bulk-import/" },
    ]}
  />
);
