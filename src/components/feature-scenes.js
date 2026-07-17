import React, { useEffect, useState } from "react";
import {
  IconBrightnessUp,
  IconCellSignal1,
  IconCheck,
  IconPhoto,
  IconQrcode,
  IconSearch,
  IconSignalLte,
  IconWifiOff,
} from "@tabler/icons-react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import handheldScanner from "../images/handheld-scanner-soft.webp";

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
    <img src="/app-mark.png" alt="" width="28" height="28" />
  </span>
);

const HandheldScanner = () => (
  <img
    className="scanner-device-art"
    src={handheldScanner}
    alt=""
    width="264"
    height="331"
  />
);

const Scene = ({ className, children }) => (
  <div
    className={`feature-scene ${className}`}
    aria-hidden="true"
  >
    {children}
  </div>
);

const OFFLINE_CARDS = [
  {
    id: "loyalty",
    className: "offline-card-one",
    label: "Loyalty card",
    code: "barcode",
  },
  {
    id: "boarding",
    className: "offline-card-two",
    label: "Boarding pass",
    code: "qr",
  },
  {
    id: "membership",
    className: "offline-card-three",
    label: "Membership",
    code: "barcode",
  },
];

const OFFLINE_PHASE_DELAY = {
  idle: 2400,
  departing: 720,
  promoting: 720,
  returning: 720,
};

const getOfflineCardPosition = (index, phase) => {
  if (phase === "departing") {
    return index === 0 ? "departing" : index === 1 ? "middle" : "back";
  }

  if (phase === "promoting") {
    return index === 0 ? "parked" : index === 1 ? "front" : "middle";
  }

  if (phase === "returning") {
    return index === 0 ? "returning" : index === 1 ? "front" : "middle";
  }

  return index === 0 ? "front" : index === 1 ? "middle" : "back";
};

export const ScanScene = () => {
  const { t } = useTranslation();

  return (
    <Scene className="feature-scene-scan">
    <div className="scan-reticle">
      <i />
      <i />
      <i />
      <i />
      <div className="scene-code-card">
        <span className="scene-code-card-head">
          <b>{t("EVERYDAY CARD")}</b>
          <span>EAN-13</span>
        </span>
        <Barcode />
      </div>
      <span className="scan-beam" />
    </div>
    <span className="scene-status scene-status-scan">
      <IconCheck size={14} stroke={2.2} /> {t("Code found")}
    </span>
    </Scene>
  );
};

export const ImportScene = () => {
  const { t } = useTranslation();

  return (
    <Scene className="feature-scene-import">
    <div className="import-source">
      <span className="import-source-label">
        <IconPhoto size={12} stroke={1.9} /> {t("Photo library")}
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
          <b>{t("From Photos")}</b>
          <small>{t("Recognizing cards")}</small>
        </span>
      </span>
      <span className="import-result-list">
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>{t("Recognized")}</small>
          </span>
        </span>
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>{t("Recognized")}</small>
          </span>
        </span>
        <span className="import-result">
          <span className="import-result-check">
            <IconCheck size={12} stroke={2.4} />
          </span>
          <span className="import-result-copy">
            <i />
            <small>{t("Recognized")}</small>
          </span>
        </span>
      </span>
    </div>
    </Scene>
  );
};

export const FoldersScene = () => {
  const { t } = useTranslation();

  return (
    <Scene className="feature-scene-folders">
    <div className="folder-browser">
      <div className="folder-search">
        <IconSearch size={14} stroke={1.8} />
        <span>{t("Find a saved code")}</span>
      </div>
      <div className="folder-tabs">
        <span>{t("All")}</span>
        <span>{t("Shopping")}</span>
        <span>{t("Travel")}</span>
        <i className="folder-tab-active" />
      </div>
      <div className="folder-card-viewport">
        <div className="folder-card-track">
          <div className="folder-card-row folder-shopping">
            <span className="folder-mini-card folder-mini-card-peach">
              <Barcode />
              <small>{t("Market")}</small>
            </span>
            <span className="folder-mini-card folder-mini-card-mint">
              <Barcode />
              <small>{t("Gym")}</small>
            </span>
            <span className="folder-mini-card folder-mini-card-indigo">
              <Barcode />
              <small>{t("Coupons")}</small>
            </span>
          </div>
          <div className="folder-card-row folder-travel">
            <span className="folder-mini-card folder-mini-card-indigo">
              <Barcode />
              <small>{t("Airline")}</small>
            </span>
            <span className="folder-mini-card folder-mini-card-peach">
              <Barcode />
              <small>{t("Train")}</small>
            </span>
            <span className="folder-mini-card folder-mini-card-mint">
              <Barcode />
              <small>{t("Hotel")}</small>
            </span>
          </div>
        </div>
      </div>
      <span className="folder-tap folder-tap-shopping" />
      <span className="folder-tap folder-tap-travel" />
      <div className="folder-expanded-card folder-expanded-card-shopping">
        <span className="folder-expanded-label">{t("SHOPPING · GYM")}</span>
        <b>{t("Gym membership")}</b>
        <Barcode />
        <span className="folder-expanded-ready">
          <IconCheck size={12} stroke={2.4} /> {t("Ready to scan")}
        </span>
      </div>
      <div className="folder-expanded-card folder-expanded-card-travel">
        <span className="folder-expanded-label">{t("TRAVEL · AIRLINE")}</span>
        <b>{t("Boarding pass")}</b>
        <Barcode />
        <span className="folder-expanded-ready">
          <IconCheck size={12} stroke={2.4} /> {t("Ready to scan")}
        </span>
      </div>
    </div>
    </Scene>
  );
};

export const OfflineScene = () => {
  const { t } = useTranslation();
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [deck, setDeck] = useState({
    order: OFFLINE_CARDS.map(({ id }) => id),
    phase: "idle",
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setMotionEnabled(!mediaQuery.matches);

      if (mediaQuery.matches) {
        setDeck((current) => ({ ...current, phase: "idle" }));
      }
    };

    syncMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncMotionPreference);
      return () => mediaQuery.removeEventListener("change", syncMotionPreference);
    }

    mediaQuery.addListener(syncMotionPreference);
    return () => mediaQuery.removeListener(syncMotionPreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled) return undefined;

    const timer = window.setTimeout(() => {
      setDeck((current) => {
        if (current.phase === "idle") {
          return { ...current, phase: "departing" };
        }

        if (current.phase === "departing") {
          return { ...current, phase: "promoting" };
        }

        if (current.phase === "promoting") {
          return { ...current, phase: "returning" };
        }

        const [front, ...rest] = current.order;
        return { order: [...rest, front], phase: "idle" };
      });
    }, OFFLINE_PHASE_DELAY[deck.phase]);

    return () => window.clearTimeout(timer);
  }, [deck.phase, motionEnabled]);

  return (
    <Scene className="feature-scene-offline">
      <div className="offline-signal">
        <IconCellSignal1
          className="offline-signal-cell"
          size={25}
          stroke={1.8}
        />
        <IconSignalLte
          className="offline-signal-network"
          size={27}
          stroke={1.7}
        />
        <IconWifiOff
          className="offline-signal-wifi"
          size={27}
          stroke={1.8}
        />
      </div>
      <div className="offline-card-stack">
        {deck.order.map((cardId, index) => {
          const card = OFFLINE_CARDS.find(({ id }) => id === cardId);
          const position = getOfflineCardPosition(index, deck.phase);

          return (
            <div
              className={`offline-card ${card.className} offline-card-${position}`}
              key={card.id}
            >
              <span className="offline-card-kicker">{t(card.label)}</span>
              <span
                className={`offline-code-area${
                  card.code === "qr" ? " offline-code-area-qr" : ""
                }`}
              >
                {card.code === "qr" ? (
                  <IconQrcode size={56} stroke={1.65} />
                ) : (
                  <Barcode />
                )}
              </span>
              <span className="offline-ready">
                <IconCheck size={13} stroke={2.3} /> {t("Ready offline")}
              </span>
            </div>
          );
        })}
      </div>
    </Scene>
  );
};

export const WidgetsScene = () => {
  const { t } = useTranslation();

  return (
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
            <b>{t("Coffee card")}</b>
            <small>{t("Tap to open")}</small>
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
};

export const ScannerScene = () => {
  const { t } = useTranslation();

  return (
    <Scene className="feature-scene-scanner">
    <span className="brightness-chip">
      <IconBrightnessUp size={15} stroke={2} /> {t("100% brightness")}
    </span>
    <div className="fullscreen-code">
      <span>{t("READY TO SCAN")}</span>
      <Barcode />
      <small>{t("Keep screen facing the reader")}</small>
    </div>
    <span className="scanner-check scanner-check-one">
      <IconCheck size={14} stroke={2.5} />
    </span>
    <span className="scanner-check scanner-check-two">
      <IconCheck size={14} stroke={2.5} />
    </span>
    <span className="scanner-check scanner-check-three">
      <IconCheck size={14} stroke={2.5} />
    </span>
    <div className="checkout-scanner">
      <span className="scanner-beam" />
      <HandheldScanner />
    </div>
    </Scene>
  );
};
