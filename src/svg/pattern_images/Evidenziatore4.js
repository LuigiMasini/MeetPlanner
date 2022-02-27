import * as React from "react";

function SvgEvidenziatore4({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={16.208} height={51.066} viewBox="0 0 16.208 51.066" {...props}>
      <path
        d="M16.208 47.919H0v-34.58h16.187v34.58zM1.97 45.949h12.247V15.331H1.97zM4.111 49.096h8.008v1.97H4.11z"
        fill={currentColor}
      />
      <path
        d="M15.224 14.324h-1.97v-2.398c-.707-.15-1.692-.492-2.505-1.285-.9-.877-1.435-2.055-1.585-3.554H7.216c-.15 1.499-.686 2.677-1.585 3.554-.835.793-1.798 1.135-2.505 1.285v2.398h-1.97v-4.303l1.028.042c.021 0 1.22 0 2.098-.856.685-.664 1.028-1.713 1.028-3.105v-.985h5.803v.985c0 1.413.342 2.463 1.049 3.126.899.857 2.077.835 2.098.835l1.028-.042v4.303z"
        fill={currentColor}
      />
      <path
        d="M11.07 7.087H5.267V3.062L11.091 0zm-3.833-1.97H9.1v-1.82l-1.863.985z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgEvidenziatore4;
