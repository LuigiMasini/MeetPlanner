import * as React from "react";

function SvgPortapenne4({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={35.603} height={50.633} viewBox="0 0 35.603 50.633" {...props}>
      <path
        d="M35.583 50.633H0v-27.78h35.603v27.78zM1.889 48.744h31.805V24.742H1.889z"
        fill={currentColor}
      />
      <path
        d="M18.623 24.742H9.65L5.893 15.83l2.67-3.984 6.528-.04 5.175 12.237zm-7.72-1.89h6.796l-3.86-9.136-4.27.02-1.54 2.3z"
        fill={currentColor}
      />
      <path
        d="M7.412 16.919L3.04 6.549l8.192-.102 3.04 7.187-4.703.102zm-1.54-8.521l1.93 4.558.74-1.088 2.895-.062-1.458-3.45zM26.733 24.742h-6.529l4.27-16.94 6.14 1.54zm-4.106-1.89h2.628l3.06-12.134-2.465-.616z"
        fill={currentColor}
      />
      <path
        d="M30.142 11.17l-6.14-1.54 1.52-5.996 6.14 1.54zm-3.84-2.916l2.464.616.596-2.32-2.464-.616z"
        fill={currentColor}
      />
      <path
        d="M31.21 7.002l-6.14-1.54.822-3.224A2.966 2.966 0 0128.766 0c.246 0 .493.02.719.082l.39.103c1.58.39 2.546 2.012 2.156 3.593zm-3.86-2.916l2.463.616.35-1.396a1.065 1.065 0 00-.781-1.294l-.39-.102a1.065 1.065 0 00-1.294.78z"
        fill={currentColor}
      />
      <g>
        <path fill={currentColor} d="M.678 31.743h34.227v1.89H.678z" />
      </g>
      <g>
        <path fill={currentColor} d="M.678 39.854h34.227v1.889H.678z" />
      </g>
    </svg>
  );
}

export default SvgPortapenne4;
