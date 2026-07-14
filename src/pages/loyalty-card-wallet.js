import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GuidePage from "../components/guide-page";
import Seo from "../components/seo";

const faq = [
  {
    question: "Can I store any loyalty card in ScanKeeper?",
    answer:
      "You can save loyalty and membership cards that use a supported QR code or barcode. Common formats include QR, EAN, UPC, Code 128, PDF417, Data Matrix, and Aztec.",
  },
  {
    question: "Can I use my loyalty cards without internet?",
    answer:
      "Yes. Saved cards are stored in the app and can be opened offline, which is useful in stores with poor reception.",
  },
  {
    question: "Does ScanKeeper replace Apple Wallet or Google Wallet?",
    answer:
      "ScanKeeper is a flexible barcode organizer for cards and codes that may not have an official wallet pass. It can also group cards into folders, import screenshots, and work across iPhone and Android.",
  },
  {
    question: "Can I add a photo or logo to a card?",
    answer:
      "Yes. You can add or edit an image so each saved card is easy to recognize in your collection.",
  },
];

const LoyaltyCardWalletPage = () => (
  <GuidePage
    eyebrow="Loyalty card wallet guide"
    title="Put loyalty cards on your phone — without the clutter."
    lede="Scan the barcode on a store, reward, club, gym, or membership card and keep it in one searchable wallet. ScanKeeper makes the saved code quick to find and ready to show at checkout."
    quickAnswer="ScanKeeper is a loyalty card wallet for iPhone and Android. It stores supported card barcodes locally, organizes them into folders, and opens them full-screen when you need them."
    campaign="guide_loyalty_wallet"
    steps={[
      {
        title: "Scan the physical card",
        text: "Open the scanner and point the camera at the barcode or QR code printed on your card.",
      },
      {
        title: "Make the card recognizable",
        text: "Give it a clear name, choose a color, and add a photo or image if you want visual identification.",
      },
      {
        title: "Place it in a folder",
        text: "Group cards under Groceries, Shopping, Gym, Travel, or any collection that matches your routine.",
      },
      {
        title: "Show it at checkout",
        text: "Tap the saved card to display its code full-screen with an automatic brightness boost.",
      },
    ]}
    benefits={[
      {
        icon: "offline",
        title: "Ready without reception",
        text: "The saved barcode stays available when mobile data is slow or unavailable.",
      },
      {
        icon: "folders",
        title: "Easy to find",
        text: "Folders, search, names, and images keep a large card collection manageable.",
      },
      {
        icon: "widget",
        title: "Close at hand",
        text: "Widgets can put frequently used cards on your home screen for faster access.",
      },
    ]}
    faq={faq}
  >
    <section className="article-media-block">
      <div>
        <p className="eyebrow">A wallet for more than stores</p>
        <h2>Keep every barcode-based membership together</h2>
        <p>
          A loyalty wallet is useful anywhere an organization identifies you
          with a scannable code. That can include supermarket rewards, gym
          entry, a library account, a coworking membership, a gift card, or a
          club pass. ScanKeeper does not depend on a store having an official
          wallet integration: if the card uses a supported code, you can save
          it.
        </p>
        <p>
          Because the collection is stored locally, opening a card does not wait
          for a retailer app to load. You choose the name and folder, so the
          card is organized around your life instead of the issuer's brand.
        </p>
      </div>
      <div className="article-phone">
        <StaticImage
          src="../images/app-home.png"
          alt="Loyalty and membership cards organized in ScanKeeper"
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

export default LoyaltyCardWalletPage;

export const Head = () => (
  <Seo
    title="Loyalty Card Wallet App for iPhone & Android | ScanKeeper App"
    description="Store loyalty, reward, membership, gym, and club card barcodes in one offline wallet. Organize folders and open any card in one tap."
    path="/loyalty-card-wallet/"
    faq={faq}
    article
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Loyalty card wallet", path: "/loyalty-card-wallet/" },
    ]}
  />
);
