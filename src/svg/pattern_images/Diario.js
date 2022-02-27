import * as React from "react";

function SvgDiario({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={37.373} height={58.143} viewBox="0 0 37.373 58.143" {...props}>
      <path
        d="M29.04 48.95H0V0h29.04c4.596 0 8.333 3.737 8.333 8.334v32.24c.021 4.617-3.737 8.376-8.334 8.376zM1.803 47.146H29.04c3.609 0 6.551-2.943 6.551-6.551V8.355c0-3.608-2.942-6.55-6.55-6.55H1.803z"
        fill={currentColor}
      />
      <path
        fill={currentColor}
        d="M25.86.902h1.805v42.614H25.86zM3.952 58.143V48.048h1.783v5.133l2.298-2.728 2.298 2.75v-5.155h1.804V58.12l-4.102-4.875z"
      />
    </svg>
  );
}

export default SvgDiario;
