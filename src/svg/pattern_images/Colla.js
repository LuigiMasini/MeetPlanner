import * as React from "react";

function SvgColla({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={24.791} height={44.952} viewBox="0 0 24.791 44.952" {...props}>
      <path
        d="M19.545 44.952h-14.3A5.25 5.25 0 010 39.706V22.83a5.25 5.25 0 015.246-5.245h14.299a5.25 5.25 0 015.246 5.245v16.876c0 2.875-2.353 5.246-5.246 5.246zm-14.3-25.818a3.673 3.673 0 00-3.677 3.678v16.875a3.673 3.673 0 003.678 3.678h14.299a3.673 3.673 0 003.677-3.678V22.812a3.673 3.673 0 00-3.677-3.678zM18.63 16.875H6.16v-4.237h12.47zM7.747 15.307h9.315v-1.082H7.747z"
        fill={currentColor}
      />
      <path
        d="M17.342 14.206H7.448L10.435 0h3.939zM9.39 12.638h6.01L13.087 1.587h-1.363zM21.356 36.626H3.435V25.873h17.92zM5.022 35.058h14.747V27.46H5.022z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgColla;
