import * as React from "react";

function SvgColla2({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={29.284} height={51.928} viewBox="0 0 29.284 51.928" {...props}>
      <path
        d="M21.476 51.928H7.808C3.504 51.928 0 48.423 0 44.12V24.427c0-4.304 3.504-7.808 7.808-7.808h13.668c4.303 0 7.808 3.504 7.808 7.808V44.12c0 4.303-3.505 7.808-7.808 7.808zM7.808 18.198c-3.443 0-6.23 2.807-6.23 6.229V44.12c0 3.443 2.807 6.23 6.23 6.23h13.668c3.443 0 6.23-2.808 6.23-6.23V24.427c0-3.443-2.808-6.23-6.23-6.23z"
        fill={currentColor}
      />
      <path
        d="M22.583 18.115H6.72l-.778-.778v-6.783l.778-.78h15.862l.778.78v6.783zM7.5 16.558h14.304v-5.226H7.5z"
        fill={currentColor}
      />
      <path
        fill={currentColor}
        d="M16.476.594l2.52 9.755-1.516.389-2.377-9.18h-.881l-2.275 9.18-1.516-.369L12.869.594 13.627 0h2.09z"
      />
      <g>
        <path
          d="M14.652 40.35c-1.086 0-2.11-.431-2.869-1.23a3.947 3.947 0 01-.717-4.386l2.89-6.209h1.413l2.849 6.25a3.958 3.958 0 01-.677 4.304 3.939 3.939 0 01-2.889 1.27zm.02-9.632L12.48 35.39a2.383 2.383 0 00.43 2.644c.471.492 1.066.758 1.742.758.676 0 1.291-.266 1.742-.758.656-.697.82-1.722.41-2.582z"
          fill={currentColor}
        />
      </g>
      <g>
        <path
          d="M14.652 44.878c-5.84 0-10.615-4.754-10.615-10.615 0-5.86 4.754-10.615 10.615-10.615 5.84 0 10.615 4.754 10.615 10.615 0 5.861-4.775 10.615-10.615 10.615zm0-19.652c-4.98 0-9.037 4.058-9.037 9.037 0 4.98 4.057 9.037 9.037 9.037s9.037-4.057 9.037-9.037-4.057-9.037-9.037-9.037z"
          fill={currentColor}
        />
      </g>
      <g
        strokeMiterlimit={10}
        fill="none"
        stroke={currentColor}
        strokeWidth={5}
        strokeLinejoin="bevel"
        transform="matrix(.20492 0 0 .20492 -155.434 -43.628)"
      >
        <path d="M863.3 462.4h-66.7c-18.9 0-34.2-15.3-34.2-34.2v-96.1c0-18.9 15.3-34.2 34.2-34.2h66.7c18.9 0 34.2 15.3 34.2 34.2v96.1c.1 18.9-15.2 34.2-34.2 34.2zM791.3 264.4h77.4v33.1h-77.4zM813.1 264.4c3.5-14 7.4-29.8 11.8-47.7h10.2c4.6 17.9 8.7 33.7 12.3 47.7" />
        <path d="M830.2 353.7L816 384c-2.7 5.7-1.6 12.5 2.8 17.1v.1c6.1 6.5 16.5 6.4 22.5-.1v0c4.2-4.6 5.2-11.2 2.7-16.8z" />
        <circle cx={830} cy={380.2} r={47.9} />
      </g>
    </svg>
  );
}

export default SvgColla2;
