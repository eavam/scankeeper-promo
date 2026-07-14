import React from "react";

const guideStripeOffsets = [-72, -27, 18, 63, 108, 153, 198, 243];

export const ZebraRule = () => (
  <svg
    className="zebra-rule"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 210 24"
    shapeRendering="geometricPrecision"
  >
    <defs>
      <pattern
        id="zebra-rule-pattern"
        width="18"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M-4 27 11 -3M14 27 29 -3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </pattern>
    </defs>
    <rect width="210" height="24" fill="url(#zebra-rule-pattern)" />
  </svg>
);

export const GuideZebraArt = () => (
  <svg
    className="guide-zebra-art"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 270 150"
    shapeRendering="geometricPrecision"
  >
    <defs>
      <clipPath id="guide-zebra-clip">
        <rect width="245" height="105" rx="25" />
      </clipPath>
    </defs>
    <g transform="translate(12 20) rotate(10 122.5 52.5)">
      <g clipPath="url(#guide-zebra-clip)">
        <rect width="245" height="105" fill="var(--peach)" />
        {guideStripeOffsets.map((offset) => (
          <path
            d={`M${offset} 122 ${offset + 90} -17`}
            fill="none"
            key={offset}
            stroke="var(--ink)"
            strokeWidth="10"
          />
        ))}
      </g>
    </g>
  </svg>
);
