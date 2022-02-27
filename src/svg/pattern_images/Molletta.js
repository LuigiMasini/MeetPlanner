import * as React from "react";

function SvgMolletta({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={40.017} height={50.487} viewBox="0 0 40.017 50.487" {...props}>
      <path
        d="M28.34 50.487H11.25a4.092 4.092 0 01-4.077-4.077v-.302a4.092 4.092 0 014.077-4.078h17.09a4.092 4.092 0 014.076 4.078v.302c.025 2.24-1.812 4.077-4.077 4.077zm-17.09-6.544a2.18 2.18 0 00-2.164 2.165v.302a2.18 2.18 0 002.164 2.164h17.09a2.18 2.18 0 002.163-2.164v-.302a2.18 2.18 0 00-2.164-2.165z"
        fill={currentColor}
      />
      <path
        d="M27.66 43.943H12.458V25.571H27.66zM14.396 42.03h11.35V27.51h-11.35z"
        fill={currentColor}
      />
      <path
        d="M26.98 27.509H13.138L0 19.178h40.017zM13.717 25.57h12.71l7.046-4.505H6.62z"
        fill={currentColor}
      />
      <path
        d="M25.37 21.09H14.244l-.931-1.233L18.95 0h1.838l5.486 19.857zm-9.867-1.912h8.583L19.832 3.826z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgMolletta;
