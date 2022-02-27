import * as React from "react";

function SvgToiconIconFeatherStudy({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-study_svg__feather_een"
        d="M27 21V7a1 1 0 00-1-1H6a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1zM6 7h20v14H6V7zm23 16V7a3 3 0 00-3-3H6a3 3 0 00-3 3v16a2 2 0 100 4h26a2 2 0 100-4zM4 7c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v16H4V7zm25 19H3c-.551 0-1-.449-1-1s.449-1 1-1h10a1 1 0 001 1h4a1 1 0 001-1h10c.551 0 1 .449 1 1s-.449 1-1 1z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherStudy;
