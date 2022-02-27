import * as React from "react";

function SvgPinzatrice({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={35.397} height={50.096} viewBox="0 0 35.397 50.096" {...props}>
      <path
        d="M17.698 39.874a7.454 7.454 0 01-7.455-7.455 7.454 7.454 0 017.455-7.456 7.454 7.454 0 017.456 7.456 7.454 7.454 0 01-7.456 7.455zm0-13.305a5.85 5.85 0 100 11.7 5.85 5.85 0 100-11.7z"
        fill={currentColor}
      />
      <path
        d="M17.698 42.45c-5.533 0-10.053-4.498-10.053-10.052a10.05 10.05 0 0110.053-10.053c5.534 0 10.053 4.498 10.053 10.053 0 5.554-4.52 10.053-10.053 10.053zm0-18.48c-4.646 0-8.426 3.781-8.426 8.428 0 4.646 3.78 8.426 8.426 8.426 4.647 0 8.427-3.78 8.427-8.426 0-4.647-3.78-8.427-8.427-8.427z"
        fill={currentColor}
      />
      <path
        d="M17.698 50.096C7.941 50.096 0 42.155 0 32.398c0-9.758 7.941-17.699 17.698-17.699 9.758 0 17.699 7.941 17.699 17.699 0 9.757-7.941 17.698-17.699 17.698zm0-33.77c-8.87 0-16.072 7.222-16.072 16.072 0 8.849 7.223 16.072 16.072 16.072 8.87 0 16.072-7.223 16.072-16.072 0-8.85-7.201-16.072-16.072-16.072z"
        fill={currentColor}
      />
      <path
        d="M4.393 23.38l-1.33-.909c1.182-1.731 3.674-6.293 1.288-11.066C.78 4.245 5.576.042 5.618 0l1.035 1.225c-.148.127-3.886 3.464-.887 9.462 2.787 5.533-.043 10.728-1.373 12.693z"
        fill={currentColor}
      />
      <g
        strokeMiterlimit={10}
        fill="none"
        stroke={currentColor}
        strokeWidth={5}
        strokeLinejoin="bevel"
        transform="matrix(.2112 0 0 .2112 -219.37 -111.639)"
      >
        <circle cx={1122.5} cy={682.1} r={31.5} />
        <circle cx={1122.5} cy={682.1} r={43.7} />
        <circle cx={1122.5} cy={682.1} r={79.9} />
        <path d="M1056.3 637.2c6.5-9.5 18.3-32.3 6.3-56.3-15.8-31.6 5.1-49.4 5.1-49.4" />
      </g>
    </svg>
  );
}

export default SvgPinzatrice;
