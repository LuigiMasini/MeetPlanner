import * as React from "react";

function SvgCompasso({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={23.482} height={45.945} viewBox="0 0 23.482 45.945" {...props}>
      <path
        d="M11.75 17.626c-3.916 0-7.108-3.192-7.108-7.11v-.822H18.86v.823c-.02 3.917-3.192 7.109-7.11 7.109zm-5.385-6.287a5.46 5.46 0 005.386 4.622 5.46 5.46 0 005.385-4.622z"
        fill={currentColor}
      />
      <path
        d="M4.113 41.891H0L4.642 10.4l1.645.118a5.458 5.458 0 005.444 5.444h1.156zm-2.194-1.665h1l7.696-22.698a7.13 7.13 0 01-4.877-3.212z"
        fill={currentColor}
      />
      <path
        d="M3.036 45.945H1.43l-1.273-4.68.803-1.039h2.546l.803 1.038zm-1-4.054l.197.705.195-.705zM23.482 41.891h-4.113l-8.793-25.91h1.155a5.458 5.458 0 005.445-5.445l1.645-.117zm-2.918-1.665h.998l-3.819-25.91c-1.077 1.684-2.82 2.899-4.876 3.212z"
        fill={currentColor}
      />
      <path
        d="M20.446 45.945l-1.273-4.68.803-1.039h2.546l.803 1.038-1.273 4.681zm.607-4.054l.196.705.196-.705zM14.473 11.34H9.009V0h5.464zm-3.8-1.646h2.155v-8.03h-2.154z"
        fill={currentColor}
      />
      <g>
        <path
          d="M11.75 29.572C3.428 29.572.236 21.817.197 21.74l1.527-.627c.118.274 2.84 6.796 10.008 6.796 7.207 0 9.988-6.718 10.008-6.776l1.527.607c0 .078-3.212 7.833-11.515 7.833z"
          fill={currentColor}
        />
      </g>
      <g>
        <path fill={currentColor} d="M10.909 26.126h1.664v5.385H10.91z" />
      </g>
    </svg>
  );
}

export default SvgCompasso;