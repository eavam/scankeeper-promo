import React, { useRef, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const steps = [
  {
    label: "Choose photos",
    eyebrow: "01 · Bring in the codes",
    title: "Select up to 50 photos in one go.",
    text: "Choose screenshots or card photos from your library. ScanKeeper App checks the batch on your device and keeps the readable results.",
  },
  {
    label: "Add context",
    eyebrow: "02 · Make it recognizable",
    title: "Name it, color it, file it.",
    text: "Give every saved code a useful name, image, color, and folder. The details turn a raw barcode into a card you can spot instantly.",
  },
  {
    label: "Find instantly",
    eyebrow: "03 · Ready when you are",
    title: "Your whole wallet stays one tap away.",
    text: "Search or browse a folder, then open the right code at full brightness—even when the venue has poor reception.",
  },
];

const ProductTour = () => {
  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef([]);
  const step = steps[activeStep];

  const selectRelativeStep = (offset) => {
    const nextStep = (activeStep + offset + steps.length) % steps.length;
    setActiveStep(nextStep);
    tabRefs.current[nextStep]?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    selectRelativeStep(event.key === "ArrowRight" ? 1 : -1);
  };

  return (
    <div className="product-tour" data-reveal>
      <div className="tour-tabs" role="tablist" aria-label="App walkthrough">
        {steps.map((item, index) => (
          <button
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`tour-tab-${index}`}
            aria-controls={`tour-panel-${index}`}
            aria-selected={activeStep === index}
            tabIndex={activeStep === index ? 0 : -1}
            className={activeStep === index ? "is-active" : undefined}
            onClick={() => setActiveStep(index)}
            onKeyDown={handleKeyDown}
            key={item.label}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="tour-panel"
        id={`tour-panel-${activeStep}`}
        role="tabpanel"
        aria-labelledby={`tour-tab-${activeStep}`}
        key={activeStep}
      >
        <div className="tour-copy">
          <p className="eyebrow">{step.eyebrow}</p>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          <p className="tour-position">
            <span>{String(activeStep + 1).padStart(2, "0")}</span>
            of {String(steps.length).padStart(2, "0")} · Choose a step above
          </p>
        </div>

        <div className="tour-device" aria-live="polite">
          <div className="tour-screen">
            {activeStep === 0 && (
              <StaticImage
                src="../images/app-bulk-import.png"
                alt="ScanKeeper App bulk import screen for choosing up to 50 photos"
                placeholder="blurred"
                width={342}
                quality={84}
                formats={["auto", "webp"]}
              />
            )}
            {activeStep === 1 && (
              <StaticImage
                src="../images/app-edit.png"
                alt="ScanKeeper App card editor with name, folder, color, and image options"
                placeholder="blurred"
                width={342}
                quality={84}
                formats={["auto", "webp"]}
              />
            )}
            {activeStep === 2 && (
              <StaticImage
                src="../images/app-home.png"
                alt="ScanKeeper App home screen with an organized barcode collection"
                placeholder="blurred"
                width={342}
                quality={84}
                formats={["auto", "webp"]}
              />
            )}
            <span className="tour-scan-line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTour;
