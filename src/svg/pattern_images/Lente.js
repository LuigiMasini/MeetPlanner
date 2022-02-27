import * as React from "react";

function SvgLente({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={29.343} height={65.485} viewBox="0 0 29.343 65.485" {...props}>
      <path
        d="M14.672 29.343C6.578 29.343 0 22.766 0 14.672S6.578 0 14.672 0c8.094 0 14.671 6.578 14.671 14.672 0 8.094-6.577 14.671-14.671 14.671zm0-27.313C7.702 2.03 2.03 7.703 2.03 14.672c0 6.969 5.673 12.642 12.642 12.642 6.969 0 12.642-5.673 12.642-12.642 0-6.97-5.673-12.642-12.642-12.642z"
        fill={currentColor}
      />
      <path
        d="M14.672 65.485l-3.546-9.977V26.849l1.198.22a12.63 12.63 0 004.695 0l1.198-.22v28.635zM13.18 55.14l1.516 4.23 1.516-4.23v-25.87a15.451 15.451 0 01-3.007 0v25.87z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgLente;
