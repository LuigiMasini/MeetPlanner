import * as React from "react";

function SvgLavagnetta({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={37.844} height={53.662} viewBox="0 0 37.844 53.662" {...props}>
      <path
        d="M37.823 53.662H0V6.399h37.844v47.263zm-36.07-1.774H36.07V8.173H1.753z"
        fill={currentColor}
      />
      <path
        d="M34.338 7.286h-1.774V4.815H26.82a5.196 5.196 0 01-3.949-1.837 3.44 3.44 0 00-2.597-1.204h-2.62a3.407 3.407 0 00-2.597 1.204 5.196 5.196 0 01-3.949 1.837H5.364v2.47H3.59V3.042h7.518a3.407 3.407 0 002.598-1.204A5.196 5.196 0 0117.655 0h2.619c1.52 0 2.956.676 3.949 1.837a3.44 3.44 0 002.597 1.204h7.518z"
        fill={currentColor}
      />
      <path
        d="M30.136 11.763H7.772A4.214 4.214 0 013.569 7.56V6.8h1.774v.76A2.443 2.443 0 007.772 9.99h22.364a2.443 2.443 0 002.428-2.429V6.8h1.774v.76a4.2 4.2 0 01-4.202 4.203z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgLavagnetta;
