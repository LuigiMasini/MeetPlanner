import * as React from "react";

function SvgToiconIconFeatherMark({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-mark_svg__feather_een"
        d="M19 0h-6a3 3 0 00-3 3v20a1 1 0 001 1h.333l1.439 4.316a1 1 0 00.949.684H14v1.219a1 1 0 00.757.97l2 .5a1 1 0 001.243-.97V29h.279a1 1 0 00.949-.684L20.667 24H21a1 1 0 001-1V3a3 3 0 00-3-3zm-6 1h6c1.103 0 2 .897 2 2v5h-2c-.551 0-1 .449-1 1v4h-4V9c0-.551-.449-1-1-1h-2V3c0-1.103.897-2 2-2zm4 29.719l-2-.5V29h2v1.719zM18.279 28h-4.558l-1.333-4h7.225l-1.334 4zM11 23V9h2v4c0 .551.449 1 1 1h4c.551 0 1-.449 1-1V9h2v14H11z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherMark;
