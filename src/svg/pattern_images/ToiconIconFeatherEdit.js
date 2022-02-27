import * as React from "react";

function SvgToiconIconFeatherEdit({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-edit_svg__feather_een"
        d="M19 0h-6a3 3 0 00-3 3v20.667a1 1 0 00.2.6l5 6.667a1 1 0 001.6 0l5-6.667a1 1 0 00.2-.6V3a3 3 0 00-3-3zm-3 30.333L15 29h2l-1 1.333zM17.75 28h-3.5l-3-4h9.5l-3 4zM21 23H11V11h10v12zm0-13H11V7h10v3zm0-4H11V3c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v3z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherEdit;
