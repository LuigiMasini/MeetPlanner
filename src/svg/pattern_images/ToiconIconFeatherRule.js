import * as React from "react";

function SvgToiconIconFeatherRule({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-rule_svg__feather_een"
        d="M20 0h-8a3 3 0 00-3 3v26a3 3 0 003 3h8a3 3 0 003-3V3a3 3 0 00-3-3zm2 29a2 2 0 01-2 2h-8a2 2 0 01-2-2h1.5a.5.5 0 000-1H10v-2h3.5a.5.5 0 000-1H10v-2h1.5a.5.5 0 000-1H10v-2h3.5a.5.5 0 000-1H10v-2h1.5a.5.5 0 000-1H10v-2h3.5a.5.5 0 000-1H10v-2h1.5a.5.5 0 000-1H10V8h3.5a.5.5 0 000-1H10V5h1.5a.5.5 0 000-1H10V3a2 2 0 012-2h8a2 2 0 012 2v26z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherRule;
