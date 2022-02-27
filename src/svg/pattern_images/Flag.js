import * as React from "react";

function SvgFlag({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={34.312} height={53.667} viewBox="0 0 34.312 53.667" {...props}>
      <path
        d="M3.04 53.667L0 47.11V24.954h5.839V47.09zM1.7 46.73l1.3 2.82 1.199-2.8V26.634h-2.5z"
        fill={currentColor}
      />
      <path
        d="M34.312 26.634H.02V0h33.832l-9.838 13.017zM1.7 24.954h29.273l-9.038-11.957L30.513 1.66H1.72v23.294z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgFlag;
