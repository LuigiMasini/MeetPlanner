import * as React from "react";

function SvgGraffetta({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={15.685} height={37.523} viewBox="0 0 15.685 37.523" {...props}>
      <path
        d="M8.557 37.523H0V7.843C0 3.522 3.523 0 7.842 0c4.32 0 7.843 3.523 7.843 7.842v26.97h-1.38V7.842a6.486 6.486 0 00-6.479-6.478 6.486 6.486 0 00-6.478 6.478V36.16h5.796V9.11h1.38z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgGraffetta;
