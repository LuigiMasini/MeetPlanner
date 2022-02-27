import * as React from "react";

function SvgToiconIconFeatherWrite({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-write_svg__feather_een"
        d="M19 0h-6a3 3 0 00-3 3v22a1 1 0 001 1l4 4v.957c0 .522.382.989.902 1.038A1 1 0 0017 31v-1l4-4a1 1 0 001-1V3a3 3 0 00-3-3zm-2.414 29h-1.171l-3-3h7.172l-3.001 3zM21 25H11V11h1v4a2 2 0 104 0v-4h5v14zm0-15h-6v5c0 .551-.449 1-1 1s-1-.449-1-1v-5h-2V3a2 2 0 012-2h6a2 2 0 012 2v7z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherWrite;
