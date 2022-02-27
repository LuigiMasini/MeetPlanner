import * as React from "react";

function SvgPostit({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={55.549} height={46.264} viewBox="0 0 55.549 46.264" {...props}>
      <path
        d="M55.55 42.02H19.683c-6.526 0-11.805-5.306-11.805-11.805V0h38.094v30.215c0 5.28 4.297 9.577 9.576 9.577zM10.106 2.228v27.96c0 5.28 4.298 9.577 9.577 9.577h28.941a11.818 11.818 0 01-4.907-9.576V2.229z"
        fill={currentColor}
      />
      <path
        d="M10.107 46.264H0V0h10.107zM2.255 44.01h5.624V2.228H2.255z"
        fill={currentColor}
      />
      <path
        fill={currentColor}
        d="M44.328 44.01v-3.104h2.228v5.358H8.993V44.01z"
      />
    </svg>
  );
}

export default SvgPostit;
