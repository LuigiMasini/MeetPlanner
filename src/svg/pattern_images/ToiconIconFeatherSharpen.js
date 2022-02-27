import * as React from "react";

function SvgToiconIconFeatherSharpen({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-sharpen_svg__feather_een"
        d="M27 12.13V5a3 3 0 00-3-3H8a3 3 0 00-3 3v7.13c0 .474.341.851.798.977a3.001 3.001 0 010 5.786c-.457.125-.798.503-.798.977V27a3 3 0 003 3h16a3 3 0 003-3v-7.13c0-.474-.341-.851-.798-.977a3.001 3.001 0 010-5.786c.457-.125.798-.503.798-.977zM12 29V10c0-2.206 1.794-4 4-4 .347 0 .678.058 1 .142V29h-5zm6 0V6.556c1.19.694 2 1.97 2 3.444v19h-2zm5-13a4.007 4.007 0 003 3.873V27c0 1.103-.897 2-2 2h-3V10a5 5 0 00-10 0v19H8c-1.103 0-2-.897-2-2v-7.127A4.007 4.007 0 009 16a4.007 4.007 0 00-3-3.873V5c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v7.127A4.007 4.007 0 0023 16zm-7 2a1 1 0 11-2 0 1 1 0 012 0z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherSharpen;
