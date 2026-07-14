import React from "react";
import {
  IconArrowRight,
  IconBrightnessUp,
  IconCheck,
  IconPhoto,
  IconSearch,
  IconWifiOff,
} from "@tabler/icons-react";

const Barcode = ({ className = "" }) => (
  <span className={`scene-barcode${className ? ` ${className}` : ""}`} />
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
      <span className="photo-card photo-card-back" />
      <span className="photo-card">
        <span className="photo-sun" />
        <span className="photo-hills" />
      </span>
      <span className="photo-count">
        <IconPhoto size={13} stroke={2} /> 12
      </span>
    </div>
    <span className="import-path">
      <IconArrowRight size={19} stroke={1.8} />
    </span>
    <span className="import-flight">
      <IconPhoto size={17} stroke={1.9} />
    </span>
    <div className="import-target">
      <span className="import-target-head">
        <AppMark />
        <span>
          <b>Saved</b>
          <small>From Photos</small>
        </span>
      </span>
      <Barcode />
      <IconCheck className="import-check" size={16} stroke={2.3} />
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
      <div className="folder-card-row">
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
          <small>Airline</small>
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
