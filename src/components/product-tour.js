import React, { useEffect, useMemo, useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { translateFields } from "../i18n/helpers";

const FRAME_DELAY = 2800;
const FADE_DURATION = 520;

const steps = [
  {
    label: "Import a batch",
    text: "Choose up to 50 photos, let ScanKeeper find the readable codes, add names, and save the batch.",
    frames: [
      {
        id: "actions",
        title: "Start from Actions",
        caption: "Bulk import sits next to the tools you already use.",
      },
      {
        id: "select-photos",
        title: "Choose up to 50 photos",
        caption: "Pick screenshots or photos straight from your library.",
      },
      {
        id: "checking-photos",
        title: "Let ScanKeeper check the batch",
        caption: "The photos are scanned privately on your device.",
      },
      {
        id: "name-empty",
        title: "Review what was found",
        caption: "You stay in control before anything is added.",
      },
      {
        id: "name-filled",
        title: "Add the context you need",
        caption: "Give the card a name you will recognize later.",
      },
      {
        id: "import-done",
        title: "Keep the readable results",
        caption: "Finish the batch with a clear import summary.",
      },
    ],
  },
  {
    label: "Find and use a card",
    text: "Browse the library, search for IKEA, open and enlarge its barcode, then edit the saved card.",
    frames: [
      {
        id: "library",
        title: "See every card in one place",
        caption: "The library stays clean and easy to browse.",
      },
      {
        id: "search",
        title: "Search for IKEA",
        caption: "A name takes you straight to the card you need.",
      },
      {
        id: "open-code",
        title: "Open the matching card",
        caption: "Your saved code is ready even without a connection.",
      },
      {
        id: "code-expanded",
        title: "Give the scanner more room",
        caption: "Expand the code into a simple full-screen view.",
      },
      {
        id: "edit-top",
        title: "Update the card any time",
        caption: "Its name, color, folder, and image are still yours to change.",
      },
      {
        id: "edit-details",
        title: "Keep every detail useful",
        caption: "Refine the saved information whenever the card changes.",
      },
    ],
  },
];

const TourScreen = ({
  name,
  currentScreen,
  nextScreen,
  isTransitioning,
  children,
}) => {
  const isCurrent = currentScreen === name;
  const isNext = nextScreen === name;
  const className = [
    "tour-screen-slide",
    isCurrent ? "is-current" : "",
    isNext ? "is-next" : "",
    isCurrent && isTransitioning ? "is-leaving" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} aria-hidden={!isCurrent}>
      {children}
    </div>
  );
};

const TourScreens = ({ currentScreen, nextScreen, isTransitioning }) => {
  const screenProps = { currentScreen, nextScreen, isTransitioning };
  const { t } = useTranslation();

  return (
    <div className="tour-screen-stack">
      <TourScreen name="actions" {...screenProps}>
        <StaticImage
          src="../images/tour-actions.png"
          alt={t("ScanKeeper Actions screen with the Bulk import option")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="select-photos" {...screenProps}>
        <StaticImage
          src="../images/tour-select-photos.png"
          alt={t(
            "ScanKeeper bulk import screen with a button to select up to 50 photos",
          )}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="checking-photos" {...screenProps}>
        <StaticImage
          src="../images/tour-checking-photos.png"
          alt={t("ScanKeeper checking selected photos for readable codes")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="name-empty" {...screenProps}>
        <StaticImage
          src="../images/tour-name-empty.png"
          alt={t("ScanKeeper import form ready for a card name and value")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="name-filled" {...screenProps}>
        <StaticImage
          src="../images/tour-name-filled.png"
          alt={t("ScanKeeper import form filled with a card name and code value")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="import-done" {...screenProps}>
        <StaticImage
          src="../images/tour-import-done.png"
          alt={t("ScanKeeper import summary showing that the batch is complete")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="edit-top" {...screenProps}>
        <StaticImage
          src="../images/tour-edit-top.png"
          alt={t(
            "ScanKeeper card editor with name, color, folder, and image options",
          )}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="edit-details" {...screenProps}>
        <StaticImage
          src="../images/tour-organize-card.png"
          alt={t("ScanKeeper card editor showing additional saved card details")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="library" {...screenProps}>
        <StaticImage
          src="../images/tour-find-card.png"
          alt={t("ScanKeeper organized card library with search and folders")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="search" {...screenProps}>
        <StaticImage
          src="../images/tour-search.png"
          alt={t("ScanKeeper search showing a matching saved card")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="open-code" {...screenProps}>
        <StaticImage
          src="../images/tour-open-code.png"
          alt={t("ScanKeeper card screen displaying a barcode ready to scan")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
      <TourScreen name="code-expanded" {...screenProps}>
        <StaticImage
          src="../images/tour-code-expanded.png"
          alt={t("ScanKeeper full-screen barcode view")}
          placeholder="blurred"
          width={322}
          sizes="(max-width: 600px) 260px, 322px"
          quality={86}
          formats={["auto", "webp"]}
        />
      </TourScreen>
    </div>
  );
};

const ProductTour = () => {
  const { t } = useTranslation();
  const translatedSteps = useMemo(
    () =>
      steps.map((step) => ({
        ...step,
        label: t(step.label),
        text: t(step.text),
        frames: translateFields(t, step.frames, ["title", "caption"]),
      })),
    [t],
  );
  const [activeStep, setActiveStep] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);
  const [transitionTarget, setTransitionTarget] = useState(null);
  const [manualSelection, setManualSelection] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const tourRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionQuery.matches);
    };

    updateMotionPreference();
    motionQuery.addEventListener?.("change", updateMotionPreference);
    return () => {
      motionQuery.removeEventListener?.("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const element = tourRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const isLastFrame =
      activeFrame === translatedSteps[activeStep].frames.length - 1;

    if (
      !isInView ||
      !isPageVisible ||
      prefersReducedMotion ||
      transitionTarget ||
      (manualSelection && isLastFrame)
    ) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      if (!isLastFrame) {
        setTransitionTarget({ step: activeStep, frame: activeFrame + 1 });
      } else {
        setTransitionTarget({
          step: (activeStep + 1) % translatedSteps.length,
          frame: 0,
        });
      }
    }, FRAME_DELAY);

    return () => window.clearTimeout(timer);
  }, [
    activeFrame,
    activeStep,
    isInView,
    isPageVisible,
    manualSelection,
    prefersReducedMotion,
    transitionTarget,
    translatedSteps,
  ]);

  useEffect(() => {
    if (!transitionTarget) return undefined;

    const timer = window.setTimeout(() => {
      setActiveStep(transitionTarget.step);
      setActiveFrame(transitionTarget.frame);
      setTransitionTarget(null);
    }, FADE_DURATION);

    return () => window.clearTimeout(timer);
  }, [transitionTarget]);

  const selectStep = (index, shouldFocus = false) => {
    setManualSelection(true);
    setTransitionTarget(null);
    setActiveStep(index);
    setActiveFrame(0);
    if (shouldFocus) stepRefs.current[index]?.focus();
  };

  const handleKeyDown = (event) => {
    let nextStep;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextStep = (activeStep + 1) % translatedSteps.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextStep =
        (activeStep - 1 + translatedSteps.length) % translatedSteps.length;
    } else if (event.key === "Home") {
      nextStep = 0;
    } else if (event.key === "End") {
      nextStep = translatedSteps.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectStep(nextStep, true);
  };

  const step = translatedSteps[activeStep];
  const frame = step.frames[activeFrame];
  const nextFrame = transitionTarget
    ? translatedSteps[transitionTarget.step].frames[transitionTarget.frame]
    : null;

  return (
    <div
      ref={tourRef}
      className="product-tour"
      data-reveal
      style={{ "--tour-fade-duration": `${FADE_DURATION}ms` }}
    >
      <div className="tour-guide">
        <div className="tour-guide-head">
          <p className="eyebrow">{t("Two everyday flows")}</p>
          <h3>{t("From photo to checkout.")}</h3>
        </div>

        <div
          className="tour-steps"
          role="tablist"
          aria-label={t("Two ways to use ScanKeeper")}
          aria-orientation="vertical"
        >
          {translatedSteps.map((item, index) => (
            <button
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`tour-tab-${index}`}
              aria-controls="tour-panel"
              aria-selected={activeStep === index}
              tabIndex={activeStep === index ? 0 : -1}
              className={`tour-step${activeStep === index ? " is-active" : ""}`}
              onClick={() => selectStep(index)}
              onFocus={() => selectStep(index)}
              onMouseEnter={() => selectStep(index)}
              onKeyDown={handleKeyDown}
              key={item.label}
            >
              <span className="tour-step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="tour-step-copy">
                <strong>{item.label}</strong>
                <small>{item.text}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="tour-visual"
        id="tour-panel"
        role="tabpanel"
        aria-labelledby={`tour-tab-${activeStep}`}
      >
        <span className="tour-orbit tour-orbit-peach" aria-hidden="true" />
        <span className="tour-orbit tour-orbit-mint" aria-hidden="true" />
        <div className="tour-device">
          <div className="tour-screen-frame">
            <TourScreens
              currentScreen={frame.id}
              nextScreen={nextFrame?.id}
              isTransitioning={Boolean(transitionTarget)}
            />
          </div>
        </div>
        <p className="tour-screen-caption">
          {frame.title}
          <small>{frame.caption}</small>
        </p>
      </div>
    </div>
  );
};

export default ProductTour;
