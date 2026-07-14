import React from "react";
import {
  IconBrightnessUp,
  IconCheck,
  IconPhoto,
  IconSearch,
  IconWifiOff,
} from "@tabler/icons-react";

const EAN13_PATTERN = [
  "101",
  "0001011",
  "0100111",
  "0110011",
  "0010011",
  "0111101",
  "0011101",
  "01010",
  "1100110",
  "1101100",
  "1000010",
  "1011100",
  "1001110",
  "1000100",
  "101",
].join("");

const isGuardBar = (index) =>
  index < 3 || (index >= 45 && index < 50) || index >= 92;

const Barcode = ({ className = "" }) => (
  <span className={`scene-barcode${className ? ` ${className}` : ""}`}>
    <svg
      viewBox="0 0 113 34"
      preserveAspectRatio="none"
      focusable="false"
      aria-hidden="true"
    >
      {EAN13_PATTERN.split("").map((module, index) =>
        module === "1" ? (
          <rect
            key={index}
            x={index + 9}
            y="0"
            width="1"
            height={isGuardBar(index) ? 34 : 30}
          />
        ) : null,
      )}
    </svg>
  </span>
);

const AppMark = () => (
  <span className="scene-app-mark">
    <img src="/favicon.png" alt="" width="28" height="28" />
  </span>
);

const Scene = ({ className, children }) => (
  <div
    className={`feature-scene ${className}`}
    aria-hidden="true"
  >
    {children}
  </div>
);

export const ScanScene = () => (
  <Scene className="feature-scene-scan">
    <div className="scan-reticle">
      <i />
      <i />
      <i />
      <i />
      <div className="scene-code-card">
        <span className="scene-code-card-head">
          <b>EVERYDAY CARD</b>
          <span>EAN-13</span>
        </span>
        <Barcode />
      </div>
      <span className="scan-beam" />
    </div>
    <span className="scene-status scene-status-scan">
      <IconCheck size={14} stroke={2.2} /> Code found
    </span>
  </Scene>
);

export const ImportScene = () => (
  <Scene className="feature-scene-import">
    <div className="import-source">
      <span className="import-source-label">
        <IconPhoto size={12} stroke={1.9} /> Photo library
      </span>
      <span className="photo-card photo-card-back" />
      <span className="photo-card photo-card-middle" />
      <span className="photo-card photo-card-front">
        <span className="photo-sun" />
        <span className="photo-hills" />
      </span>
    </div>

    <span className="import-flight import-flight-landscape">
      <i className="import-flight-sun" />
      <i className="import-flight-hill" />
    </span>
    <span className="import-flight import-flight-screenshot">
      <i />
      <i />
      <i />
    </span>
    <span className="import-flight import-flight-photo-icon">
      <IconPhoto size={15} stroke={1.9} />
    </span>

    <div className="import-target">
      <span className="import-target-head">
        <AppMark />
        <span>
          <b>From Photos</b>
          <small>Recognizing cards</small>
        </span>
      </span>
      <span className="import-result-list">
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>Recognized</small>
          </span>
        </span>
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>Recognized</small>
          </span>
        </span>
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>Recognized</small>
          </span>
        </span>
      </span>
    </div>
  </Scene>
);

export const FoldersScene = () => (
  <Scene className="feature-scene-folders">
    <div className="folder-browser">
      <div className="folder-search">
        <IconSearch size={14} stroke={1.8} />
        <span>Find a saved code</span>
      </div>
      <div className="folder-tabs">
        <span>All</span>
        <span>Shopping</span>
        <span>Travel</span>
        <i className="folder-tab-active" />
      </div>
      <div className="folder-card-viewport">
        <div className="folder-card-track">
          <div className="folder-card-row folder-shopping">
            <span className="folder-mini-card folder-mini-card-peach">
              <Barcode />
              <small>Market</small>
            </span>
            <span className="folder-mini-card folder-mini-card-mint">
              <Barcode />
              <small>Gym</small>
            </span>
            <span className="folder-mini-card folder-mini-card-indigo">
              <Barcode />
              <small>Coupons</small>
            </span>
          </div>
          <div className="folder-card-row folder-travel">
            <span className="folder-mini-card folder-mini-card-indigo">
              <Barcode />
              <small>Airline</small>
            </span>
            <span className="folder-mini-card folder-mini-card-peach">
              <Barcode />
              <small>Train</small>
            </span>
            <span className="folder-mini-card folder-mini-card-mint">
              <Barcode />
              <small>Hotel</small>
            </span>
          </div>
        </div>
      </div>
      <span className="folder-tap folder-tap-shopping" />
      <span className="folder-tap folder-tap-travel" />
      <div className="folder-expanded-card folder-expanded-card-shopping">
        <span className="folder-expanded-label">SHOPPING · GYM</span>
        <b>Gym membership</b>
        <Barcode />
        <span className="folder-expanded-ready">
          <IconCheck size={12} stroke={2.4} /> Ready to scan
        </span>
      </div>
      <div className="folder-expanded-card folder-expanded-card-travel">
        <span className="folder-expanded-label">TRAVEL · AIRLINE</span>
        <b>Boarding pass</b>
        <Barcode />
        <span className="folder-expanded-ready">
          <IconCheck size={12} stroke={2.4} /> Ready to scan
        </span>
      </div>
    </div>
  </Scene>
);

export const OfflineScene = () => (
  <Scene className="feature-scene-offline">
    <div className="offline-signal">
      <span />
      <span />
      <span />
      <IconWifiOff size={25} stroke={1.7} />
    </div>
    <div className="offline-card">
      <span className="offline-card-head">
        <AppMark />
        <span>
          <b>Grocery card</b>
          <small>Stored on this device</small>
        </span>
      </span>
      <Barcode />
      <span className="offline-ready">
        <IconCheck size={13} stroke={2.3} /> Ready offline
      </span>
    </div>
  </Scene>
);

export const WidgetsScene = () => (
  <Scene className="feature-scene-widgets">
    <div className="widget-home-screen">
      <span className="home-app home-app-peach" />
      <span className="home-app home-app-indigo" />
      <span className="home-app home-app-mint" />
      <span className="home-app home-app-dark" />
      <div className="saved-code-widget">
        <span className="widget-head">
          <AppMark />
          <span>
            <b>Coffee card</b>
            <small>Tap to open</small>
          </span>
        </span>
        <Barcode />
      </div>
      <span className="home-dock">
        <i />
        <i />
        <i />
      </span>
    </div>
  </Scene>
);

export const ScannerScene = () => (
  <Scene className="feature-scene-scanner">
    <span className="brightness-chip">
      <IconBrightnessUp size={15} stroke={2} /> 100% brightness
    </span>
    <div className="fullscreen-code">
      <span>READY TO SCAN</span>
      <Barcode />
      <small>Keep screen facing the reader</small>
    </div>
    <div className="checkout-scanner">
      <span className="scanner-lens" />
    </div>
    <span className="scanner-laser" />
  </Scene>
);
