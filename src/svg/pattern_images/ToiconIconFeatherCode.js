import * as React from "react";

function SvgToiconIconFeatherCode({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-code_svg__feather_een"
        d="M8.5 10h-2a.5.5 0 010-1h2a.5.5 0 010 1zM7 11.5a.5.5 0 00.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm.5 6.5h2a.5.5 0 000-1h-2a.5.5 0 000 1zm-1 2h2a.5.5 0 000-1h-2a.5.5 0 000 1zM22 13.5a.5.5 0 01-.5.5h-13a.5.5 0 010-1h13a.5.5 0 01.5.5zM8.5 16h13a.5.5 0 000-1h-13a.5.5 0 000 1zm8-4h-5a.5.5 0 010-1h5a.5.5 0 010 1zm4-3h-10a.5.5 0 000 1h10a.5.5 0 000-1zM29 4H3a3 3 0 00-3 3v16a3 3 0 003 3h9v3h-1.5a.5.5 0 000 1h11a.5.5 0 000-1H20v-3h9a3 3 0 003-3V7a3 3 0 00-3-3zM19 29h-6v-3h6v3zm12-6a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h26a2 2 0 012 2v16z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherCode;
