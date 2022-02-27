import * as React from "react";

function SvgToiconIconFeatherFill({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-fill_svg__feather_een"
        d="M28.879 15.879L21 8V5.178c0-2.088-1.523-3.956-3.601-4.158A4.004 4.004 0 0013 5v3l-1 1H8.5A6.5 6.5 0 002 15.5v12.387c0 .997.678 1.923 1.661 2.085A2.003 2.003 0 006 28V17l10.879 10.879a3 3 0 004.243 0l7.757-7.757a3.001 3.001 0 000-4.243zM14 5a3.005 3.005 0 013.598-2.942C19.022 2.335 20 3.668 20 5.118V7l-.879-.879a3 3 0 00-4.243 0L14 7V5zm-.5 11a.5.5 0 00.5-.5v-1.408c.581.207 1 .757 1 1.408 0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5c0-.651.419-1.201 1-1.408V15.5a.5.5 0 00.5.5zM5 16v12a1.001 1.001 0 01-2 0V15.5C3 12.467 5.468 10 8.5 10H11l-6 6zm23.172 3.414l-7.757 7.757a2 2 0 01-2.828 0L6.414 16 13 9.414v3.636a2.508 2.508 0 00-1.886 3.216 2.45 2.45 0 001.686 1.639A2.502 2.502 0 1014 13.05V8.414l1.586-1.586a2 2 0 012.828 0l9.757 9.757a2 2 0 01.001 2.829z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherFill;
