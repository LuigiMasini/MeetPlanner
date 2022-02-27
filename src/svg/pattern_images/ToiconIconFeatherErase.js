import * as React from "react";

function SvgToiconIconFeatherErase({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-erase_svg__feather_een"
        d="M29.879 17.879L14.121 2.121c-.585-.585-1.353-.878-2.121-.878s-1.536.293-2.121.879L2.121 9.879a3 3 0 000 4.243l15.757 15.757c.586.586 1.354.879 2.121.879s1.536-.293 2.121-.879l7.757-7.757a3 3 0 00.002-4.243zM2.828 10.586l7.757-7.757c.378-.378.88-.586 1.414-.586s1.036.208 1.414.586l7.525 7.525-10.584 10.585-7.525-7.525a2.002 2.002 0 01-.001-2.828zm26.344 10.828l-7.757 7.757c-.378.378-.88.586-1.414.586a1.986 1.986 0 01-1.414-.586l-7.525-7.525L21.648 11.06l7.525 7.525a2.005 2.005 0 01-.001 2.829z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherErase;
