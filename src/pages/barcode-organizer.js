import React from "react";
import GuidePage from "../components/guide-page";
import Seo from "../components/seo";

const faq = [
  {
    question: "What can I organize in ScanKeeper?",
    answer:
      "You can organize saved QR codes and barcodes for loyalty cards, memberships, tickets, coupons, gift cards, labels, and other everyday uses supported by the app.",
  },
  {
    question: "Can I search my saved barcodes?",
    answer:
      "Yes. Name cards clearly and use search to find a saved code. Folders also let you browse related cards together.",
  },
  {
    question:
      "Can I keep old barcodes without showing them on the home screen?",
    answer:
      "Yes. Archive codes you may need later and keep the active collection focused on current cards.",
  },
  {
    question: "Can I export my barcode list?",
    answer:
      "Yes. ScanKeeper supports CSV export so you can keep a backup or work with barcode data in a spreadsheet.",
  },
];

const BarcodeOrganizerPage = () => (
  <GuidePage
    eyebrow="Barcode organizer guide"
    title="Save and organize barcodes before they become a mess."
    lede="A long scan history is not an organizer. ScanKeeper gives each code a recognizable card, then adds folders, search, manual ordering, and an archive so a growing collection stays useful."
    quickAnswer="Use ScanKeeper to name saved QR codes and barcodes, add identifying images, group them into folders, search the whole collection, archive old codes, and export data to CSV."
    campaign="guide_barcode_organizer"
    steps={[
      {
        title: "Add a code",
        text: "Use the camera, import an image, or enter the value manually. All three routes create the same editable card.",
        visual: "home",
        focus: "home-scan",
        hint: "Start from the scanner button at the bottom of the library.",
      },
      {
        title: "Give it a name and look",
        text: "Replace an anonymous barcode value with a name you recognize, then add a color or image for faster visual scanning.",
        visual: "edit",
        focus: "edit-identity",
        hint: "Names and images are easier to recognize than raw values.",
      },
      {
        title: "Choose a folder",
        text: "Place the card in Shopping, Work, Travel, Home, or a custom folder that matches why you saved it.",
        visual: "edit-details",
        focus: "edit-folder",
        hint: "Organize around real uses, not barcode formats.",
      },
      {
        title: "Find it again",
        text: "Search by the name you gave the card. The library filters immediately, even as the collection grows.",
        visual: "search",
        focus: "search-field",
        hint: "A familiar word takes you back to the right card.",
      },
      {
        title: "Archive or export",
        text: "Move old cards out of the active library without deleting them, or export a CSV when you need a separate copy.",
        visual: "actions",
        focus: "actions-organize",
        hint: "Collection tools keep active cards focused and data portable.",
      },
    ]}
    benefits={[
      {
        icon: "folders",
        title: "Structure instead of history",
        text: "Folders and names reflect why you saved a code, not just when you scanned it.",
      },
      {
        icon: "photos",
        title: "Visual recognition",
        text: "Custom images make cards easier to distinguish than a list of raw barcode values.",
      },
      {
        icon: "export",
        title: "Portable data",
        text: "CSV export lets you move saved values into a backup or spreadsheet workflow.",
      },
    ]}
    faq={faq}
  >
    <section className="article-context-block">
      <div>
        <p className="eyebrow">Organize for retrieval</p>
        <h2>The best system is the one you can use under pressure</h2>
        <p>
          At a checkout, venue entrance, or front desk, you rarely remember the
          exact encoded value. You remember that it is the grocery card, the gym
          pass, or the ticket for tonight. ScanKeeper lets the collection match
          that mental model with readable names, images, and folders.
        </p>
        <p>
          Search spans saved codes, while the archive moves expired or rarely
          used items out of the active view without deleting them. Manual order
          keeps the most important cards where you expect them.
        </p>
      </div>
      <aside className="article-context-card article-context-organizer">
        <span>Search</span>
        <span>Folders</span>
        <span>Manual order</span>
        <span>Archive</span>
        <span>CSV export</span>
      </aside>
    </section>
  </GuidePage>
);

export default BarcodeOrganizerPage;

export const Head = () => (
  <Seo
    title="Barcode Organizer App — Save, Search & Sort Codes | ScanKeeper App"
    description="Save QR codes and barcodes with names, images, folders, search, archive, widgets, and CSV export. Works offline on iPhone and Android."
    path="/barcode-organizer/"
    faq={faq}
    article
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Barcode organizer", path: "/barcode-organizer/" },
    ]}
  />
);
