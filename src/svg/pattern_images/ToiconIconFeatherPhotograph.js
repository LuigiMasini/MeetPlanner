import * as React from "react";

function SvgToiconIconFeatherPhotograph({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-photograph_svg__feather_een"
        d="M28 7h-5l-1.171-2.342A3 3 0 0019.146 3h-6.292a3 3 0 00-2.683 1.658L9 7H4a3 3 0 00-3 3v15a3 3 0 003 3h24a3 3 0 003-3V10a3 3 0 00-3-3zm2 18c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h5.618l1.447-2.894A1.99 1.99 0 0112.854 4h6.292a1.99 1.99 0 011.789 1.106L22.382 8H28c1.103 0 2 .897 2 2v15zM8 10a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1v-2zm-1 2H4v-2h3v2zm9-3a8 8 0 100 16 8 8 0 000-16zm0 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-13a6 6 0 100 12 6 6 0 000-12zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherPhotograph;
