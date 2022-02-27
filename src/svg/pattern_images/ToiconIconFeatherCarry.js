import * as React from "react";

function SvgToiconIconFeatherCarry({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-carry_svg__feather_een"
        d="M21 5.21V3a3 3 0 00-3-3h-4a3 3 0 00-3 3v2.21C7.441 7.032 5 10.727 5 15v12a3 3 0 003 3h1v1a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-1h1a3 3 0 003-3V15c0-4.273-2.441-7.968-6-9.79zM12 3c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1.761c-.326-.128-.659-.24-1-.336V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1.425c-.341.096-.674.209-1 .336V3zm6 0v1.19c-.649-.119-1.316-.19-2-.19s-1.351.071-2 .19V3h4zm-7 28h-1v-1h1v1zm11 0h-1v-1h1v1zm4-4c0 1.103-.897 2-2 2H8c-1.103 0-2-.897-2-2v-4h2v2.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V23h2v4zm-15-6v1.5a.5.5 0 001 0V21h11v4.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V21h2zm-2-1v-5c0-3.86 3.14-7 7-7s7 3.14 7 7v5H9zm17 2h-2v-7c0-4.411-3.589-8-8-8s-8 3.589-8 8v7H6v-7C6 9.486 10.486 5 16 5s10 4.486 10 10v7z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherCarry;
