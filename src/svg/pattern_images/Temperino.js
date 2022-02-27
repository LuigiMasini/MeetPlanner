import * as React from "react";

function SvgTemperino({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={40.041} height={49.586} viewBox="0 0 40.041 49.586" {...props}>
      <path
        d="M40.04 49.586H0v-18.87h.93a5.928 5.928 0 005.923-5.923c0-3.255-2.668-5.923-5.923-5.923H0V0h40.04v18.87h-.93a5.928 5.928 0 00-5.922 5.923 5.928 5.928 0 005.923 5.923h.93zm-38.18-1.86h36.32V32.55c-3.866-.465-6.852-3.769-6.852-7.734 0-3.989 3.01-7.269 6.853-7.734V1.91H1.86v15.174c3.866.465 6.852 3.77 6.852 7.734 0 3.965-3.01 7.27-6.853 7.734z"
        fill={currentColor}
      />
      <path
        d="M27.314 46.478H12.213V3.133h15.1zm-13.217-1.86h11.357V4.992H14.097z"
        fill={currentColor}
      />
      <path fill={currentColor} d="M22.321 7.71h1.86v37.838h-1.86z" />
      <circle
        cx={568.6}
        cy={653.4}
        r={8.6}
        fill={currentColor}
        transform="matrix(.24475 0 0 .24475 -117.528 -135.1)"
      />
    </svg>
  );
}

export default SvgTemperino;
