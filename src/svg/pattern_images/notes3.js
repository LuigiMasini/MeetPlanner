import * as React from "react";

function SvgEvidenziatore3Copy1({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={40.798} height={50.185} {...props}>
      <path
        d="M40.798 50.185H8.091V7.407h32.707zM9.95 48.327h28.992V9.29H9.949z"
        fill={currentColor}
      />
      <path
        fill={currentColor}
        d="M5.916 5.573v39.039h3.08v1.882H4.033V3.716h32.732V8.36h-1.882V5.573z"
      />
      <path
        fill={currentColor}
        d="M1.882 1.858V40.92h3.08v1.857H0V0h32.732v4.645h-1.858V1.858z"
      />
      <path
        fill={currentColor}
        d="M21.511 14.471h12.59v1.858H21.51zM15.278 18.945h18.847v1.857H15.278zM15.278 23.418h18.847v1.858H15.278zM15.278 27.891h18.847v1.858H15.278zM15.278 32.34h18.847v1.858H15.278z"
      />
      <g>
        <path fill={currentColor} d="M15.278 36.814h18.847v1.858H15.278z" />
      </g>
      <g>
        <path fill={currentColor} d="M15.278 41.287h14.373v1.858H15.278z" />
      </g>
    </svg>
  );
}

export default SvgEvidenziatore3Copy1;
