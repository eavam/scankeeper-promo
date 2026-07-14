import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FeatureIcon from "../components/feature-icon";
import Layout from "../components/layout";
import ProductTour from "../components/product-tour";
import Seo from "../components/seo";
import StoreButtons from "../components/store-buttons";

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

const FeatureCard = ({ artwork, icon, title, children, tone = "plain" }) => (
  <article className={`feature-card feature-card-${tone}`} data-reveal>
    <div className="feature-card-visual">
      <span className="feature-icon">
        <FeatureIcon name={icon} size={25} />
      </span>
      <div className="feature-artwork">{artwork}</div>
    </div>
    <div className="feature-card-copy">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </article>
);

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            ScanKeeper App · Barcode wallet for iPhone &amp; Android
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
          <StoreButtons location="homepage_hero" />
          <ul className="trust-list" aria-label="Key benefits">
            <li>
              <FeatureIcon name="check" size={17} /> Works offline
            </li>
            <li>
              <FeatureIcon name="check" size={17} /> No account
            </li>
            <li>
              <FeatureIcon name="check" size={17} /> 40+ languages
            </li>
          </ul>
        </div>

        <div
          className="hero-visual"
          aria-label="ScanKeeper App preview"
          data-reveal
        >
          <div className="zebra-card" aria-hidden="true" />
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

    <section className="problem-strip" aria-label="ScanKeeper benefits">
      <div className="container problem-grid">
        <div>
          <span>01</span>
          <p>Leave the plastic cards at home.</p>
        </div>
        <div>
          <span>02</span>
          <p>Clear barcode screenshots from your camera roll.</p>
        </div>
        <div>
          <span>03</span>
          <p>Stop searching while the queue waits.</p>
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

        <div className="feature-grid">
          <FeatureCard
            icon="scan"
            title="Scan almost any everyday code"
            tone="peach"
            artwork={
              <StaticImage
                src="../images/feature-scan.webp"
                alt="A dimensional stack of barcode cards"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Capture QR, EAN, UPC, PDF417, Data Matrix, Aztec, Code 128, and more
            with the camera.
          </FeatureCard>
          <FeatureCard
            icon="photos"
            title="Import from Photos"
            tone="mint"
            artwork={
              <StaticImage
                src="../images/feature-import.webp"
                alt="A dimensional photo printer for batch import"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Turn an existing photo or screenshot into a reusable card without
            rescanning the original.
          </FeatureCard>
          <FeatureCard
            icon="folders"
            title="Folders that fit your life"
            tone="indigo"
            artwork={
              <StaticImage
                src="../images/feature-folders.webp"
                alt="Colorful dimensional folders"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Group Shopping, Travel, Work, memberships, and tickets, then swipe
            between collections.
          </FeatureCard>
          <FeatureCard
            icon="offline"
            title="Available offline"
            artwork={
              <StaticImage
                src="../images/feature-offline.webp"
                alt="A dimensional zebra-striped card tray"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Your saved codes open even when reception is weak. Core scanning and
            storage do not need an account.
          </FeatureCard>
          <FeatureCard
            icon="widget"
            title="Home screen widgets"
            tone="mint"
            artwork={
              <StaticImage
                src="../images/feature-widget.webp"
                alt="Dimensional QR and barcode widget tiles"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Keep frequently used cards close so you can reach the right barcode
            with fewer taps.
          </FeatureCard>
          <FeatureCard
            icon="brightness"
            title="Made for real scanners"
            tone="peach"
            artwork={
              <StaticImage
                src="../images/feature-display.webp"
                alt="A dimensional wallet filled with colorful barcode cards"
                placeholder="none"
                width={230}
                quality={90}
              />
            }
          >
            Open a code full-screen with an automatic brightness boost for a
            cleaner read at checkout.
          </FeatureCard>
        </div>
      </div>
    </section>

    <section className="section section-dark" id="how-it-works">
      <div className="container">
        <div className="section-heading section-heading-light" data-reveal>
          <p className="eyebrow">An actual look inside ScanKeeper App</p>
          <h2>See the whole flow, not just a feature list.</h2>
        </div>

        <ProductTour />

        <div className="screen-pair" data-reveal>
          <div className="screen-copy">
            <p className="eyebrow">A faster way to move in</p>
            <h2>Import up to 50 barcode photos at once.</h2>
            <p>
              Switching apps or cleaning up years of screenshots should not take
              all afternoon. Select a batch from your gallery, let ScanKeeper
              find the codes, then review and name them.
            </p>
            <Link className="text-link" to="/bulk-import/">
              See how bulk import works <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="migration-artwork">
            <StaticImage
              src="../images/wallet-migration-3d.webp"
              alt="Barcode screenshots flowing into an organized digital wallet"
              placeholder="none"
              width={690}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section use-cases">
      <div className="container">
        <div className="section-heading centered-heading" data-reveal>
          <p className="eyebrow">One wallet, many routines</p>
          <h2>Useful well beyond the grocery store.</h2>
        </div>
        <div className="use-case-grid">
          <article data-reveal>
            <span>Groceries</span>
            <h3>Loyalty &amp; reward cards</h3>
            <p>Keep supermarket and retail barcodes together.</p>
          </article>
          <article data-reveal>
            <span>Every day</span>
            <h3>Gym &amp; library access</h3>
            <p>Find memberships before you reach the door.</p>
          </article>
          <article data-reveal>
            <span>Travel</span>
            <h3>Tickets &amp; memberships</h3>
            <p>Organize travel codes and hotel reward cards.</p>
          </article>
          <article data-reveal>
            <span>Events</span>
            <h3>Concert &amp; cinema codes</h3>
            <p>Save the QR image instead of hunting through email.</p>
          </article>
          <article data-reveal>
            <span>Savings</span>
            <h3>Coupons &amp; gift cards</h3>
            <p>Keep promotional barcodes from getting buried in Photos.</p>
          </article>
          <article data-reveal>
            <span>Work</span>
            <h3>Labels &amp; CSV export</h3>
            <p>Archive scanned values and move them to a spreadsheet.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section privacy-section">
      <div className="container privacy-grid" data-reveal>
        <div className="phone phone-dark">
          <StaticImage
            src="../images/app-home-dark.png"
            alt="ScanKeeper barcode wallet in dark mode"
            placeholder="blurred"
            width={342}
            sizes="(max-width: 600px) 310px, 342px"
            quality={84}
            formats={["auto", "webp"]}
          />
        </div>
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
              <FeatureIcon name="check" size={19} /> No email or registration
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> Optional iCloud sync on iOS
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> CSV export when you want a
              copy
            </li>
            <li>
              <FeatureIcon name="check" size={19} /> Light and dark themes
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section guides-section">
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

    <section className="section faq-section">
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
          <p className="eyebrow">Free to download</p>
          <h2>Make your wallet lighter today.</h2>
          <p>Available on the App Store and Google Play.</p>
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
