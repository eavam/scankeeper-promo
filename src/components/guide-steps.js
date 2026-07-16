import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

const GuideScreenshot = ({ name }) => {
  const { t } = useTranslation();

  switch (name) {
    case "home":
      return (
        <StaticImage
          src="../images/tour-find-card.png"
          alt={t("ScanKeeper card library with the scanner button at the bottom")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "scanner":
      return (
        <StaticImage
          src="../images/guide-scanner.png"
          alt={t(
            "ScanKeeper camera scanner displaying a printed barcode, with Gallery and Import multiple controls",
          )}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "scan-result":
      return (
        <StaticImage
          src="../images/guide-scan-result.png"
          alt={t("New barcode form showing a detected EAN-13 value and a card name")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "edit":
      return (
        <StaticImage
          src="../images/tour-edit-top.png"
          alt={t("ScanKeeper editor with name, color, folder, and image controls")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "edit-details":
      return (
        <StaticImage
          src="../images/tour-organize-card.png"
          alt={t(
            "ScanKeeper editor showing folder and image controls for a saved card",
          )}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "search":
      return (
        <StaticImage
          src="../images/tour-search.png"
          alt={t("ScanKeeper library filtered by a search for IKEA")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "actions":
      return (
        <StaticImage
          src="../images/tour-actions.png"
          alt={t(
            "ScanKeeper Actions screen with folders, bulk import, archive, and CSV export",
          )}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "select-photos":
      return (
        <StaticImage
          src="../images/tour-select-photos.png"
          alt={t("ScanKeeper bulk import screen ready to select up to 50 photos")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "checking-photos":
      return (
        <StaticImage
          src="../images/tour-checking-photos.png"
          alt={t("ScanKeeper scanning a selected batch of photos on the device")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "import-form":
      return (
        <StaticImage
          src="../images/tour-name-filled.png"
          alt={t(
            "ScanKeeper bulk import review form with a card name and value filled in",
          )}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    case "expanded-code":
      return (
        <StaticImage
          src="../images/tour-code-expanded.png"
          alt={t("ScanKeeper full-screen barcode ready for a checkout scanner")}
          placeholder="blurred"
          width={320}
          sizes="(max-width: 600px) 230px, 280px"
          quality={86}
          formats={["auto", "webp"]}
          loading="lazy"
        />
      );
    default:
      return null;
  }
};

const ScannerTarget = () => (
  <div className="visual-guide-scanner-target" aria-hidden="true">
    <span>MEMBER PASS</span>
    <svg viewBox="0 0 180 58" role="presentation">
      <rect x="2" y="2" width="3" height="48" />
      <rect x="8" y="2" width="6" height="48" />
      <rect x="17" y="2" width="2" height="48" />
      <rect x="22" y="2" width="4" height="48" />
      <rect x="30" y="2" width="7" height="48" />
      <rect x="40" y="2" width="3" height="48" />
      <rect x="47" y="2" width="2" height="48" />
      <rect x="53" y="2" width="6" height="48" />
      <rect x="62" y="2" width="3" height="48" />
      <rect x="68" y="2" width="8" height="48" />
      <rect x="80" y="2" width="2" height="48" />
      <rect x="86" y="2" width="5" height="48" />
      <rect x="94" y="2" width="3" height="48" />
      <rect x="101" y="2" width="7" height="48" />
      <rect x="111" y="2" width="2" height="48" />
      <rect x="116" y="2" width="4" height="48" />
      <rect x="124" y="2" width="8" height="48" />
      <rect x="135" y="2" width="3" height="48" />
      <rect x="142" y="2" width="6" height="48" />
      <rect x="151" y="2" width="2" height="48" />
      <rect x="157" y="2" width="7" height="48" />
      <rect x="168" y="2" width="3" height="48" />
      <rect x="174" y="2" width="4" height="48" />
    </svg>
    <small>9 780201 379624</small>
  </div>
);

const GuideSteps = ({ steps }) => (
  <ol className="visual-guide-steps">
    {steps.map((step, index) => (
      <li className="visual-guide-step" key={step.title} data-reveal>
        <div className="visual-guide-copy">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>

        <figure className="visual-guide-stage">
          <div
            className={`visual-guide-phone visual-guide-phone-${step.visual}`}
          >
            <GuideScreenshot name={step.visual} />
            {step.visual === "scanner" ? <ScannerTarget /> : null}
            <span
              className={`visual-guide-focus visual-guide-focus-${step.focus}`}
              aria-hidden="true"
            />
          </div>
          <figcaption>{step.hint}</figcaption>
        </figure>
      </li>
    ))}
  </ol>
);

export default GuideSteps;
