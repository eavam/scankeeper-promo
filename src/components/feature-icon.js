import React from "react";
import {
  IconBrightnessUp,
  IconCheck,
  IconCloudUpload,
  IconFileExport,
  IconFileSpreadsheet,
  IconFolders,
  IconGift,
  IconIdBadge2,
  IconLayoutDashboard,
  IconPhoto,
  IconPlane,
  IconScan,
  IconShoppingBag,
  IconTicket,
  IconWifiOff,
} from "@tabler/icons-react";

const icons = {
  scan: IconScan,
  photos: IconPhoto,
  folders: IconFolders,
  offline: IconWifiOff,
  widget: IconLayoutDashboard,
  brightness: IconBrightnessUp,
  cloud: IconCloudUpload,
  export: IconFileExport,
  check: IconCheck,
  groceries: IconShoppingBag,
  everyday: IconIdBadge2,
  travel: IconPlane,
  events: IconTicket,
  savings: IconGift,
  work: IconFileSpreadsheet,
};

const FeatureIcon = ({ name, size = 24 }) => {
  const Icon = icons[name] || IconCheck;

  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      size={size}
      stroke={1.9}
    />
  );
};

export default FeatureIcon;
