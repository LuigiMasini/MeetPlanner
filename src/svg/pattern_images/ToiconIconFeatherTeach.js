import * as React from "react";

function SvgToiconIconFeatherTeach({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-teach_svg__feather_een"
        d="M14 14.5a.5.5 0 01-.5.5H13v.5a.5.5 0 01-1 0V15h-.5a.5.5 0 010-1h.5v-.5a.5.5 0 011 0v.5h.5a.5.5 0 01.5.5zM8.5 12h-1a.5.5 0 000 1H8v3.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zM30 25v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1V8a3 3 0 013-3h20a3 3 0 013 3v16a1 1 0 011 1zM4 24h18.511A2.482 2.482 0 0122 22.5c0-1.209.859-2.218 2-2.45v-.55a.5.5 0 011 0v.55a2.5 2.5 0 012 2.45c0 .565-.195 1.081-.511 1.5H28V8a2 2 0 00-2-2H6a2 2 0 00-2 2v16zm20.5-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm4.5 4H3v1h26v-1zm-8.5-11h2a.5.5 0 000-1h-2a.5.5 0 000 1zm2.5 1.5a.5.5 0 00-.5-.5h-2a.5.5 0 000 1h2a.5.5 0 00.5-.5zM17.5 12h-1a.5.5 0 000 1h.5v3.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherTeach;
