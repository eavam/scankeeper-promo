import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FeatureIcon from "../components/feature-icon";
import {
  FoldersScene,
  ImportScene,
  OfflineScene,
  ScannerScene,
  ScanScene,
  WidgetsScene,
} from "../components/feature-scenes";
import Layout from "../components/layout";
import ProductTour from "../components/product-tour";
import Seo from "../components/seo";
import StoreButtons from "../components/store-buttons";
import { GuideZebraArt, ZebraRule } from "../components/zebra-art";
import { getAppStoreUrl, getGooglePlayUrl } from "../constants/site";

const faq = [
  {
    question: "Does ScanKeeper work without an internet connection?",
    answer:
      "Yes. Scanning, saving, organizing, and displaying saved QR codes and barcodes work offline. Your saved codes remain available when a store or venue has poor reception.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. ScanKeeper does not require an account, email address, or sign-up to use the app.",
  },
  {
    question: "Is ScanKeeper really free?",
    answer:
      "Yes. You can save as many cards and codes as you need, and the scanning, importing, folders, widgets, themes, and offline features stay available for free. A one-time purchase is optional if you want to remove ads and support development.",
  },
  {
    question: "Can ScanKeeper read a QR code from a screenshot?",
    answer:
      "Yes. Choose a photo or screenshot from your gallery and ScanKeeper can detect the QR code or barcode inside it. You can also select up to 50 images for bulk import.",
  },
  {
    question: "Which barcode formats does ScanKeeper support?",
    answer:
      "ScanKeeper supports common formats including QR Code, EAN, UPC, Code 128, Code 39, PDF417, Data Matrix, and Aztec.",
  },
  {
    question: "Is ScanKeeper available for both iPhone and Android?",
    answer:
      "Yes. ScanKeeper is available on the Apple App Store for iPhone and iPad, and on Google Play for Android devices.",
  },
  {
    question: "Where are my cards and codes stored?",
    answer:
      "Your barcode content is stored locally in the app on your device. On iPhone and iPad, you can optionally enable iCloud sync for your own devices.",
  },
];

const FeatureCard = ({ artwork, number, title, children, tone = "plain" }) => (
  <article className={`feature-card feature-card-${tone}`} data-reveal>
    <div className="feature-card-visual">
      <span className="feature-number">{number}</span>
      <div className="feature-artwork">{artwork}</div>
    </div>
    <div className="feature-card-copy">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </article>
);

const DataOwnershipVisual = () => (
  <div className="privacy-visual" aria-hidden="true">
    <div className="privacy-data-card privacy-data-local">
      <div className="privacy-card-heading">
        <span className="privacy-card-icon">
          <FeatureIcon name="device" size={28} />
        </span>
        <span>Local first</span>
      </div>
      <strong>Stored on your device</strong>
      <span className="privacy-local-status">
        <i /> Ready offline
      </span>
    </div>

    <div className="privacy-data-card privacy-data-cloud">
      <div className="privacy-cloud-row">
        <span className="privacy-card-icon">
          <FeatureIcon name="cloud" size={26} />
        </span>
        <strong>iCloud Sync</strong>
        <span className="privacy-toggle"><i /></span>
      </div>
      <small>Optional on iPhone &amp; iPad</small>
    </div>

    <div className="privacy-data-card privacy-data-account">
      <span className="privacy-card-icon">
        <FeatureIcon name="account" size={27} />
      </span>
      <strong>No account</strong>
      <small>No email. No sign-up.</small>
    </div>

    <div className="privacy-data-card privacy-data-export">
      <div className="privacy-export-topline">
        <span>YOUR COPY</span>
        <FeatureIcon name="export" size={25} />
      </div>
      <strong>CSV</strong>
      <small>Export anytime</small>
    </div>
  </div>
);

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span>Free · No card limits</span>
            Barcode wallet for iPhone &amp; Android
          </p>
          <h1>
            Every card.
            <br />
            Every code.
            <br />
            <span>One tap away.</span>
          </h1>
          <p className="hero-lede">
            ScanKeeper turns plastic loyalty cards and forgotten screenshots
            into one tidy, offline wallet. Scan a code, import it from Photos,
            and pull it up in seconds.
          </p>
          <StoreButtons compact location="homepage_hero" />
          <ul className="trust-list" aria-label="Key benefits">
            <li>
              <FeatureIcon name="check" size={17} /> Works offline
            </li>
            <li>
              <FeatureIcon name="check" size={17} /> No account
            </li>
            <li>
              <FeatureIcon name="check" size={17} /> Every feature included
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="ScanKeeper App preview">
          <div className="zebra-card" aria-hidden="true" />
          <div className="hero-color-card" aria-hidden="true" />
          <div className="phone phone-hero">
            <StaticImage
              src="../images/app-home.png"
              alt="ScanKeeper loyalty card wallet showing organized barcode and QR cards"
              placeholder="blurred"
              loading="eager"
              width={355}
              sizes="(max-width: 600px) 312px, 355px"
              quality={84}
              formats={["auto", "webp"]}
            />
          </div>
          <div className="floating-note floating-note-top">
            <FeatureIcon name="offline" size={20} />
            <span>
              <strong>No signal?</strong> Your cards still open.
            </span>
          </div>
          <div className="floating-note floating-note-bottom">
            <span className="mini-barcode" aria-hidden="true" />
            <span>
              <strong>Ready to scan</strong> at full brightness.
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="store-proof" aria-label="ScanKeeper store availability">
      <div className="container store-proof-inner">
        <div className="store-proof-intro">
          <span className="live-dot" aria-hidden="true" />
          <p>
            <strong>Live in both app stores.</strong>
            Independently listed by Apple and Google.
          </p>
        </div>
        <div className="store-proof-grid">
          <a
            href={getAppStoreUrl("homepage_proof")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>App Store</span>
            <b>Free ↗</b>
          </a>
          <a
            href={getGooglePlayUrl("homepage_proof")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Google Play</span>
            <b>Free ↗</b>
          </a>
          <div>
            <span>Languages</span>
            <b>40+</b>
          </div>
          <div>
            <span>Sign-up</span>
            <b>Not needed</b>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="features">
      <div className="container">
        <div className="section-heading split-heading" data-reveal>
          <div>
            <p className="eyebrow">A wallet that stays useful</p>
            <h2>Built for the moment you need the code.</h2>
          </div>
          <p>
            From a grocery checkout to a gym door, ScanKeeper keeps saved codes
            easy to find, easy to read, and available without a connection.
          </p>
        </div>

        <p className="feature-swipe-hint">
          Swipe through six features <span aria-hidden="true">→</span>
        </p>
        <div className="feature-grid">
          <FeatureCard
            number="01"
            title="Scan almost any everyday code"
            tone="peach"
            artwork={<ScanScene />}
          >
            Capture QR, EAN, UPC, PDF417, Data Matrix, Aztec, Code 128, and more
            with the camera.
          </FeatureCard>
          <FeatureCard
            number="02"
            title="Import from Photos"
            tone="mint"
            artwork={<ImportScene />}
          >
            Turn an existing photo or screenshot into a reusable card without
            rescanning the original.
          </FeatureCard>
          <FeatureCard
            number="03"
            title="Folders that fit your life"
            tone="indigo"
            artwork={<FoldersScene />}
          >
            Group Shopping, Travel, Work, memberships, and tickets, then swipe
            between collections.
          </FeatureCard>
          <FeatureCard
            number="04"
            title="Available offline"
            artwork={<OfflineScene />}
          >
            Your saved codes open even when reception is weak. Core scanning and
            storage do not need an account.
          </FeatureCard>
          <FeatureCard
            number="05"
            title="Home screen widgets"
            tone="mint"
            artwork={<WidgetsScene />}
          >
            Keep frequently used cards close so you can reach the right barcode
            with fewer taps.
          </FeatureCard>
          <FeatureCard
            number="06"
            title="Made for real scanners"
            tone="peach"
            artwork={<ScannerScene />}
          >
            Open a code full-screen with an automatic brightness boost for a
            cleaner read at checkout.
          </FeatureCard>
        </div>
      </div>
    </section>

    <section className="section free-section" id="free">
      <div className="container free-stage" data-reveal>
        <div className="free-copy">
          <p className="eyebrow">Free means the whole app</p>
          <h2>Not a three-card demo.</h2>
          <p>
            Save as many cards and codes as you need. Scanning, importing,
            folders, widgets, themes, and offline access stay unlocked—without
            a subscription waiting around the corner.
          </p>
          <div className="free-zebra" aria-hidden="true">
            <span>NO LIMITS</span>
          </div>
        </div>

        <div className="free-ledger">
          <div className="free-ledger-head">
            <span>Included for free</span>
            <strong>$0</strong>
          </div>
          <ul>
            <li>
              <FeatureIcon name="check" size={20} /> Unlimited saved cards and
              codes
            </li>
            <li>
              <FeatureIcon name="check" size={20} /> Unlimited folders and
              organization
            </li>
            <li>
              <FeatureIcon name="check" size={20} /> Scan and import from Photos
            </li>
            <li>
              <FeatureIcon name="check" size={20} /> Offline wallet, widgets,
              and themes
            </li>
          </ul>
          <div className="free-optional">
            <span>Optional, one time</span>
            <p>Remove ads and support the developer. Nothing else is locked.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-dark" id="how-it-works">
      <div className="container">
        <div className="section-heading section-heading-light" data-reveal>
          <p className="eyebrow">How ScanKeeper works</p>
          <h2>From a photo to a card you can find, scan, and update.</h2>
        </div>

        <ProductTour />
      </div>
    </section>

    <section className="section use-cases" id="use-cases">
      <div className="container use-case-layout">
        <div className="use-case-intro" data-reveal>
          <p className="eyebrow">One wallet, many routines</p>
          <h2>
            <span>Useful well</span>{" "}
            <span>beyond the</span>{" "}
            <span>grocery store.</span>
          </h2>
          <p>
            The same fast, offline card works wherever a scanner—or a person—
            needs to see your code.
          </p>
          <ZebraRule />
        </div>
        <div className="use-case-grid">
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="groceries" size={27} />
              </span>
              <span className="use-case-label">Groceries</span>
            </div>
            <h3>Loyalty &amp; reward cards</h3>
            <p>Keep supermarket and retail barcodes together.</p>
          </article>
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="everyday" size={27} />
              </span>
              <span className="use-case-label">Every day</span>
            </div>
            <h3>Gym &amp; library access</h3>
            <p>Find memberships before you reach the door.</p>
          </article>
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="travel" size={27} />
              </span>
              <span className="use-case-label">Travel</span>
            </div>
            <h3>Tickets &amp; memberships</h3>
            <p>Organize travel codes and hotel reward cards.</p>
          </article>
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="events" size={27} />
              </span>
              <span className="use-case-label">Events</span>
            </div>
            <h3>Concert &amp; cinema codes</h3>
            <p>Save the QR image instead of hunting through email.</p>
          </article>
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="savings" size={27} />
              </span>
              <span className="use-case-label">Savings</span>
            </div>
            <h3>Coupons &amp; gift cards</h3>
            <p>Keep promotional barcodes from getting buried in Photos.</p>
          </article>
          <article data-reveal>
            <div className="use-case-top">
              <span className="use-case-art" aria-hidden="true">
                <FeatureIcon name="work" size={27} />
              </span>
              <span className="use-case-label">Work</span>
            </div>
            <h3>Labels &amp; CSV export</h3>
            <p>Archive scanned values and move them to a spreadsheet.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section privacy-section" id="privacy">
      <div className="container privacy-grid" data-reveal>
        <DataOwnershipVisual />
        <div className="privacy-copy">
          <p className="eyebrow">No account. No lock-in.</p>
          <h2>Your codes live on your device.</h2>
          <p>
            Barcode content is stored locally, so ScanKeeper can stay fast and
            useful offline. On iPhone and iPad, optional iCloud sync keeps your
            collection available across your own Apple devices.
          </p>
          <ul className="check-list">
            <li>
              <FeatureIcon name="check" size={19} /> Stored locally and ready
              offline
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> No email or registration
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> Optional iCloud sync on iOS
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> CSV export when you want a
              copy
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section guides-section" id="guides">
      <div className="container">
        <div className="section-heading split-heading" data-reveal>
          <div>
            <p className="eyebrow">Practical guides</p>
            <h2>Start with the job you need done.</h2>
          </div>
          <p>
            Clear answers for the most common ways people save and reuse codes.
          </p>
        </div>
        <div className="guide-grid">
          <Link
            to="/loyalty-card-wallet/"
            className="guide-card"
            data-reveal
          >
            <span>Guide 01</span>
            <GuideZebraArt />
            <h3>Turn loyalty cards into a phone wallet</h3>
            <p>For store, club, membership, and reward cards.</p>
            <b>Read guide →</b>
          </Link>
          <Link
            to="/scan-qr-code-from-image/"
            className="guide-card"
            data-reveal
          >
            <span>Guide 02</span>
            <h3>Scan a QR code from a saved image</h3>
            <p>Use codes from screenshots and your photo library.</p>
            <b>Read guide →</b>
          </Link>
          <Link
            to="/barcode-organizer/"
            className="guide-card"
            data-reveal
          >
            <span>Guide 03</span>
            <h3>Organize a growing barcode collection</h3>
            <p>Use names, images, folders, search, and archive.</p>
            <b>Read guide →</b>
          </Link>
        </div>
      </div>
    </section>

    <section className="section faq-section" id="faq">
      <div className="container faq-grid" data-reveal>
        <div className="faq-intro">
          <p className="eyebrow">Questions, answered</p>
          <h2>Before you put your cards away.</h2>
          <p>
            Still need help? <Link to="/support/">Visit support</Link>.
          </p>
        </div>
        <div className="faq-list">
          {faq.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="download-section" id="download">
      <div className="container download-card" data-reveal>
        <div>
          <p className="eyebrow">Free, with every feature</p>
          <h2>Make your wallet lighter today.</h2>
          <p>No card limits. No account. No subscription required.</p>
        </div>
        <StoreButtons location="homepage_footer" />
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <Seo
    title="ScanKeeper App — Loyalty Card Wallet & Offline Barcode Scanner"
    description="Save loyalty cards, QR codes, tickets, and barcodes in one offline wallet. Import screenshots, organize folders, and open any code in one tap on iPhone or Android."
    faq={faq}
    applicationSchema
  />
);
