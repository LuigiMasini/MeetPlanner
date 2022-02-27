import * as React from "react";

function SvgToiconIconFeatherCalculate({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-calculate_svg__feather_een"
        d="M8.5 4a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zM12.5 4a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5z"
        fill={currentColor}
      />
      <path
        className="Toicon-icon-feather-calculate_svg__feather_een"
        d="M25 1H7a2 2 0 00-2 2v26a2 2 0 002 2h18a2 2 0 002-2V3a2 2 0 00-2-2zM12 30H7a1 1 0 01-1-1v-5h6v6zm0-7H6v-6h6v6zm0-7H6v-6h6v6zm7 14h-6v-6h6v6zm0-7h-6v-6h6v6zm0-7h-6v-6h6v6zm7 13a1 1 0 01-1 1h-5v-6h6v5zm0-6h-6v-6h6v6zm0-7h-6v-6h6v6zm0-7H6V3a1 1 0 011-1h18a1 1 0 011 1v6z"
        fill={currentColor}
      />
      <path
        className="Toicon-icon-feather-calculate_svg__feather_een"
        d="M10.5 4a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherCalculate;
