import * as React from "react";

function SvgCompasso2({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={29.712} height={53.295} viewBox="0 0 29.712 53.295" {...props}>
      <path
        d="M.02 53.295V40.224h4.899zM1.666 41.89v2.241L2.5 41.89zM29.712 53.295l-4.9-13.071h4.9zm-2.5-11.405l.834 2.241V41.89zM21.58 16.482H8.152V9.6H21.58zM9.798 14.816h10.116v-3.57H9.798z"
        fill={currentColor}
      />
      <path
        d="M4.245 41.89H0v-4.978l8.39-22.096h7.735zm-2.579-1.666h1.507l10.413-23.742H9.54L1.666 37.21z"
        fill={currentColor}
      />
      <path
        d="M29.712 41.89h-4.245l-11.88-27.054h7.735l8.39 22.095zm-3.154-1.666h1.507v-3.015l-7.874-20.727h-4.046zM17.91 11.107H11.9V0h6.01zm-4.363-1.646h2.697V1.666h-2.697z"
        fill={currentColor}
      />
      <g>
        <path fill={currentColor} d="M.595 25.19h28.542v1.666H.595z" />
      </g>
      <g>
        <path fill={currentColor} d="M14.062 23.761h1.667v4.602h-1.667z" />
      </g>
    </svg>
  );
}

export default SvgCompasso2;
