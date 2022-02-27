import * as React from "react";

function SvgToiconIconFeatherDraw({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-draw_svg__feather_een"
        d="M16 6c-1.445 0-3 2.034-3 6.5s1.555 6.5 3 6.5 3-2.034 3-6.5S17.445 6 16 6zm0 12c-.83 0-2-1.707-2-5.5S15.17 7 16 7s2 1.707 2 5.5-1.17 5.5-2 5.5zM13 0a3 3 0 00-3 3v21a.99.99 0 00.691.938l4.061 6.092c.278.418.745.668 1.248.668s.97-.25 1.248-.668l4.061-6.092A.99.99 0 0022 24V3a3 3 0 00-3-3h-6zm0 1h6a2 2 0 012 2H11a2 2 0 012-2zm-2 3h10v17H11V4zm0 18h10v2H11v-2zm5.416 8.475a.514.514 0 01-.832 0L11.934 25h8.131l-3.649 5.475z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherDraw;
