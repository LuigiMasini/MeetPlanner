import * as React from "react";

function SvgEvidenziatore2({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={20.924} height={65.841} viewBox="0 0 20.924 65.841" {...props}>
      <path
        d="M20.924 47.175H.02V16.958h20.904zM1.708 45.467h17.508v-26.82H1.708z"
        fill={currentColor}
      />
      <path
        d="M20.924 17.792h-1.708V14.58c-2.298-.508-5.653-2.318-6.06-6.405H7.768c-.407 4.087-3.762 5.877-6.06 6.405v3.213H0v-4.697l.752-.081c.224-.02 5.348-.712 5.348-5.694v-.854h8.723v.854c0 2.095.895 3.68 2.644 4.718 1.362.813 2.704.976 2.704.976l.753.081z"
        fill={currentColor}
      />
      <path
        d="M13.217 8.195h-5.51V3.436L13.217 0zM9.415 6.487h2.114V3.05L9.415 4.372zM20.924 53.03H.02v-7.563h20.904zM1.708 51.324h17.508v-4.148H1.708z"
        fill={currentColor}
      />
      <path
        d="M16.348 57.87H4.595v-6.547h11.753zM6.283 56.182h8.357v-3.151H6.283z"
        fill={currentColor}
      />
      <path
        d="M10.452 65.841l-2.705-3.66v-5.999h5.49v6.02zm-.997-4.209l1.017 1.383 1.057-1.403V57.87H9.435v3.762z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgEvidenziatore2;
