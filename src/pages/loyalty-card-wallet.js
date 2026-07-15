import React from "react";
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
        text: "Tap the scanner and point the camera at the barcode or QR code printed on the card. ScanKeeper recognizes supported formats automatically.",
        visual: "scanner",
        focus: "scanner-area",
        hint: "Hold the printed code inside the camera view.",
      },
      {
        title: "Make it recognizable",
        text: "Give the card a name you will remember, then choose a color or add an image so it stands out in the library.",
        visual: "edit",
        focus: "edit-identity",
        hint: "Name and style the card before you need it.",
      },
      {
        title: "Put it in the right folder",
        text: "Add it to Groceries, Gym, Travel, or any folder that matches how you use it.",
        visual: "edit-details",
        focus: "edit-folder",
        hint: "Folders keep a growing wallet easy to scan.",
      },
      {
        title: "Open and enlarge the code",
        text: "Find the saved card, open it, and expand the barcode when the checkout scanner needs a larger target.",
        visual: "expanded-code",
        focus: "expanded-code",
        hint: "A clean full-screen code is easier to present at checkout.",
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
    <section className="article-context-block">
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
      <aside className="article-context-card article-context-loyalty">
        <span>One wallet</span>
        <strong>Any supported code.</strong>
        <div className="article-tag-cloud" aria-label="Examples of cards">
          <span>Groceries</span>
          <span>Gym</span>
          <span>Library</span>
          <span>Club pass</span>
          <span>Gift card</span>
          <span>Travel</span>
        </div>
      </aside>
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
