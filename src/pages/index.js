import React from "react";
import "../styles/global.css";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Scan. Save. Organize.</h1>
            <p>
              ScanKeeper is the most convenient way to store and organize all
              your QR codes and barcodes in one secure place. Instant scanning,
              iCloud synchronization, and an intuitive interface.
            </p>
            <div className="app-badges">
              <a href="#" className="badge">
                <img src="/app-store-badge.svg" alt="Download on App Store" />
              </a>
              <a href="#" className="badge">
                <img src="/google-play-badge.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/app-screenshot.svg" alt="ScanKeeper app screenshot" />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>Powerful Features for Your Daily Tasks</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Scanning</h3>
              <p>
                Scan any QR codes and barcodes in seconds with an enhanced
                scanner that works even in low light.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Multiple Code Types</h3>
              <p>
                Support for all popular formats: QR, EAN, UPC, Code 128, Code
                39, PDF417, and many others.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>iCloud Sync</h3>
              <p>
                Automatically synchronize your barcodes across all your devices
                via iCloud.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Storage</h3>
              <p>
                Your data is always secure thanks to local storage and
                encryption.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏷️</div>
              <h3>Easy Organization</h3>
              <p>
                Create categories, add tags and notes to quickly find the
                information you need.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Dark Mode</h3>
              <p>
                Comfortable use at any time of day with an elegant dark mode.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="container">
          <h2>Download ScanKeeper Today</h2>
          <p>
            Available for iOS and Android. No more lost or forgotten codes -
            everything important is now in your pocket.
          </p>
          <div className="app-badges">
            <a href="#" className="badge">
              <img src="/app-store-badge.svg" alt="Download on App Store" />
            </a>
            <a href="#" className="badge">
              <img src="/google-play-badge.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>ScanKeeper - Store and organize your QR codes and barcodes</title>
    <meta
      name="description"
      content="ScanKeeper is a convenient application for scanning, storing and organizing QR codes and barcodes. Available for iOS and Android."
    />
  </>
);
