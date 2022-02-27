import * as React from "react";

function SvgSquadra({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={38.59} height={50.042} viewBox="0 0 38.59 50.042" {...props}>
      <path
        d="M37.652 50.042H.76L0 48.497 36.867 0l1.723.583V49.08zm-34.94-1.925h33.977V3.446z"
        fill={currentColor}
      />
      <path
        d="M30.684 39.071h-13.1l-.76-1.546 13.1-17.23 1.723.583v17.23zM19.51 37.145h10.186V23.742zM10.084 45.152h1.926v3.928h-1.926zM16.242 45.152h1.925v3.928h-1.925zM22.424 45.152h1.926v3.928h-1.926zM28.581 45.152h1.926v3.928H28.58z"
        fill={currentColor}
      />
      <g
        strokeMiterlimit={10}
        fill="none"
        stroke={currentColor}
        strokeWidth={5}
        strokeLinejoin="bevel"
      >
        <path d="M37.652 49.08H.76L37.652.583z" strokeWidth={1.2669} />
        <path
          d="M30.684 38.108h-13.1l13.1-17.23zM11.047 49.08v-3.928M17.23 49.08v-3.928M23.387 49.08v-3.928M29.544 49.08v-3.928"
          strokeWidth={1.2669}
        />
      </g>
    </svg>
  );
}

export default SvgSquadra;
