import React from "react";

const paths = {
  scan: (
    <>
      <path d="M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3" />
      <path d="M8 12h8" />
    </>
  ),
  photos: (
    <>
      <rect x="3" y="5" width="18" height="15" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 15-5-5L5 20" />
    </>
  ),
  folders: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      <path d="M8 13h8" />
    </>
  ),
  offline: (
    <>
      <path d="M5 5 19 19" />
      <path d="M8.5 8.5A7 7 0 0 1 20 12" />
      <path d="M4 12a8 8 0 0 1 1.8-5" />
      <path d="M7 16a7 7 0 0 1 10-1" />
      <path d="M10 19a3 3 0 0 1 4 0" />
    </>
  ),
  widget: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 8h3v3H8zM14 8h2M14 11h2M8 14h2M13 14h3v2h-3z" />
    </>
  ),
  brightness: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.6-7.95A6 6 0 0 1 18 12h.5a3.5 3.5 0 1 1 0 7H7" />
      <path d="m9 15 3-3 3 3M12 12v8" />
    </>
  ),
  export: (
    <>
      <path d="M12 3v12M8 7l4-4 4 4" />
      <path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

const FeatureIcon = ({ name, size = 24 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths[name] || paths.check}
  </svg>
);

export default FeatureIcon;
