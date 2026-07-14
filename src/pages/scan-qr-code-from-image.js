import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GuidePage from "../components/guide-page";
import Seo from "../components/seo";

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

const ScanFromImagePage = () => (
  <GuidePage
    eyebrow="Scan from image guide"
    title="Scan a QR code from a screenshot or saved photo."
    lede="The code is already on your phone — so there is nothing to point the camera at. ScanKeeper can analyze an image from your gallery, extract its QR code or barcode, and save it for later."
    quickAnswer="Choose a screenshot or photo from inside ScanKeeper. The app analyzes the image on your device, recognizes supported codes, and lets you save the result as a named card."
    campaign="guide_scan_from_image"
    steps={[
      {
        title: "Save the image",
        text: "Take a screenshot or save the photo containing the QR code or barcode to your gallery.",
      },
      {
        title: "Choose Gallery in ScanKeeper",
        text: "Open the scanner options and select the image source instead of using the live camera.",
      },
      {
        title: "Select the screenshot",
        text: "Pick the image. ScanKeeper analyzes it locally and extracts a supported code.",
      },
      {
        title: "Review and save",
        text: "Check the detected value, give the card a useful name, and place it in a folder.",
      },
    ]}
    benefits={[
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
    ]}
    faq={faq}
  >
    <section className="article-media-block article-media-reverse">
      <div>
        <p className="eyebrow">More than a one-time reader</p>
        <h2>Turn a screenshot into something you can find again</h2>
        <p>
          QR screenshots tend to disappear among receipts, memes, and camera
          photos. A scan history is not much better when every result looks like
          an unfamiliar string. ScanKeeper lets you convert the detected code
          into a recognizable card with a name, image, color, and folder.
        </p>
        <p>
          This works well for event tickets, loyalty cards sent by email, gym
          memberships, travel documents, coupons, and any other supported code
          you expect to show again.
        </p>
      </div>
      <div className="article-phone">
        <StaticImage
          src="../images/app-bulk-import.png"
          alt="Select photos containing QR codes and barcodes in ScanKeeper"
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

export default ScanFromImagePage;

export const Head = () => (
  <Seo
    title="How to Scan a QR Code From a Screenshot or Image | ScanKeeper"
    description="Scan a QR code or barcode from a screenshot on the same phone. Import one image or up to 50 photos, then save and organize each detected code."
    path="/scan-qr-code-from-image/"
    faq={faq}
    article
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Scan QR code from image", path: "/scan-qr-code-from-image/" },
    ]}
  />
);
