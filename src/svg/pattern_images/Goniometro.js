import * as React from "react";

function SvgGoniometro({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={33.339} height={48.694} viewBox="0 0 33.339 48.694" {...props}>
      <path
        d="M8.992 48.694H0V0h8.992c13.43 0 24.347 10.916 24.347 24.347 0 13.43-10.916 24.347-24.347 24.347zm-7.392-1.6h7.411c12.555 0 22.747-10.212 22.747-22.747S21.546 1.6 9.01 1.6h-7.41z"
        fill={currentColor}
      />
      <path
        d="M8.459 40.254V8.44l.819.019c8.61.133 15.621 7.277 15.621 15.888 0 8.63-7.01 15.755-15.621 15.888zm1.6-30.176v28.538c7.373-.533 13.26-6.782 13.26-14.269-.02-7.487-5.887-13.717-13.26-14.27zM.8 6.687h3.944v1.6H.8zM.8 14.955h3.944v1.6H.8zM.8 23.242h3.944v1.6H.8zM.8 31.53h3.944v1.6H.8zM.8 39.797h3.944v1.6H.8z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgGoniometro;
