import * as React from "react";

function SvgLampada({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={51.334} height={50.502} viewBox="0 0 51.334 50.502" {...props}>
      <path
        d="M30.675 50.502H0v-1.036c0-5.04 4.096-9.16 9.16-9.16h12.355c5.041 0 9.16 4.097 9.16 9.16zm-28.537-2.07h26.376c-.495-3.422-3.443-6.055-6.999-6.055H9.16c-3.556 0-6.504 2.633-7.022 6.054zM46.473 25.656H34.41c-4.41 0-8.011-3.6-8.011-8.012V8.012C26.399 3.6 29.999 0 34.41 0h12.063zM34.41 2.048c-3.285 0-5.94 2.678-5.94 5.941v9.633c0 3.285 2.677 5.941 5.94 5.941h9.993V2.025H34.41z"
        fill={currentColor}
      />
      <path
        d="M45.438 18.702h-1.035V6.887h1.035a5.902 5.902 0 015.896 5.896c0 3.286-2.655 5.919-5.896 5.919zm1.035-9.587v7.381a3.821 3.821 0 002.79-3.69 3.848 3.848 0 00-2.79-3.691zM27.096 18.702a4.62 4.62 0 01-4.613-4.614 4.62 4.62 0 014.613-4.613v2.07a2.555 2.555 0 00-2.543 2.543 2.555 2.555 0 002.543 2.543z"
        fill={currentColor}
      />
      <path
        d="M16.631 41.342h-2.07v-9.227c0-8.012 0-16.271 8.664-18.86l.586 1.981c-6.707 2.003-7.18 7.697-7.18 16.879z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgLampada;
