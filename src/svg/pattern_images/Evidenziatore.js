import * as React from "react";

function SvgEvidenziatore({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={25.707} height={35.53} viewBox="0 0 25.707 35.53" {...props}>
      <path
        d="M12.32 32.864H0V12.91h12.32zM1.18 31.671h9.949V14.09h-9.95z"
        fill={currentColor}
      />
      <path
        d="M10.272 35.53H2.049v-3.859h8.223zm-7.045-1.179H9.08v-1.487H3.227zM25.707 32.99H21.68v-4.308c0-.856-.702-1.557-1.557-1.557-.856 0-1.558.701-1.558 1.557v4.308h-4.027V19.182h11.17zm-2.834-1.193h1.656V20.361H15.73v11.436h1.656v-3.129a2.755 2.755 0 012.75-2.75 2.755 2.755 0 012.75 2.75v3.13z"
        fill={currentColor}
      />
      <path
        d="M22.873 35.53h-5.487v-6.848a2.755 2.755 0 012.75-2.75 2.755 2.755 0 012.75 2.75zm-4.308-1.179h3.115v-5.669c0-.856-.702-1.557-1.557-1.557-.856 0-1.558.701-1.558 1.557zM12.32 14.089H0v-3.593L3.887 7.1V4.126h4.546V7.1l3.887 3.396zM1.18 12.909h9.949v-1.865L7.24 7.648v-2.33H5.066v2.33l-3.887 3.396z"
        fill={currentColor}
      />
      <path
        d="M8.42 5.318H3.872v-2.82L8.419 0zM5.065 4.126H7.24V1.993L5.066 3.185z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgEvidenziatore;
