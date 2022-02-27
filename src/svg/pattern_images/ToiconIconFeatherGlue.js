import * as React from "react";

function SvgToiconIconFeatherGlue({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-glue_svg__feather_een"
        d="M23.342 11.171L21 10V8a1 1 0 00-1-1h-.169C19.47 5.043 18.528.812 17 0h-2c-1.48.812-2.447 5.043-2.823 7H12a1 1 0 00-1 1v2l-2.342 1.171A3 3 0 007 13.854V29a3 3 0 003 3h12a3 3 0 003-3V13.854a3 3 0 00-1.658-2.683zM15.316 1h1.378c.776.696 1.638 3.382 2.127 6H13.19c.507-2.614 1.372-5.294 2.126-6zM12 8h8v2h-8V8zm12 21a2 2 0 01-2 2H10a2 2 0 01-2-2V13.854a2 2 0 011.106-1.789L11.236 11h9.528l2.131 1.065A2.002 2.002 0 0124 13.854V29zm-4-14h-8a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V16a1 1 0 00-1-1zm0 12h-8V16h8v11z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherGlue;
