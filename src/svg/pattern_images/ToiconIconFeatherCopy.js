import * as React from "react";

function SvgToiconIconFeatherCopy({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-copy_svg__feather_een"
        d="M19.5 14h-7a.5.5 0 000 1h7a.5.5 0 000-1zm0 2h-7a.5.5 0 000 1h7a.5.5 0 000-1zm0 2h-7a.5.5 0 000 1h7a.5.5 0 000-1zM28 6v23a3 3 0 01-3 3H7a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 011-1h2.184C13.597.837 14.696 0 16 0s2.403.837 2.816 2H21a1 1 0 011 1h3a3 3 0 013 3zM10 6H7v23h18V6h-3a1 1 0 01-1 1H11a1 1 0 01-1-1zm1 0h10V3h-2.89l-.236-.665C17.59 1.536 16.837 1 16 1s-1.59.536-1.874 1.335L13.89 3H11v3zm16 0a2 2 0 00-2-2h-3v1h3a1 1 0 011 1v23a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1h3V4H7a2 2 0 00-2 2v23a2 2 0 002 2h18a2 2 0 002-2V6z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherCopy;
