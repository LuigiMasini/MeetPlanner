import * as React from "react";

function SvgCartellina({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={44.638} height={50.739} viewBox="0 0 44.638 50.739" {...props}>
      <path
        d="M44.614 50.739H5.619V25.273L0 19.63V0h44.638zm-32.797-1.833h30.988V3.641c-.314.242-.651.483-1.013.724-1.76 1.085-3.858 1.664-6.053 1.664H11.841zm-4.365 0H9.96V4.196h25.755c1.857 0 3.617-.482 5.088-1.399a7.525 7.525 0 001.23-.964h-40.2v17.05L7.452 24.5z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgCartellina;
