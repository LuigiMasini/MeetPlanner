import * as React from "react";

function SvgToiconIconFeatherRead({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-read_svg__feather_een"
        d="M29 4H3a3 3 0 00-3 3v18a3 3 0 003 3h10a1 1 0 001 1h4a1 1 0 001-1h10a3 3 0 003-3V7a3 3 0 00-3-3zm0 1v20H18.708c-.618 0-1.236.146-1.789.422l-.419.21V5H29zM15.5 5v20.632l-.419-.21A4.025 4.025 0 0013.292 25H3V5h12.5zM31 25c0 1.103-.897 2-2 2H18v1h-4v-1H3c-1.103 0-2-.897-2-2V7c0-.737.405-1.375 1-1.722V25a1 1 0 001 1h10.292c.466 0 .925.108 1.342.317l.919.46a1.006 1.006 0 00.894 0l.919-.46A2.993 2.993 0 0118.708 26H29a1 1 0 001-1V5.278c.595.347 1 .985 1 1.722v18zM6 12.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm14-4a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherRead;
