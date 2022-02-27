import * as React from "react";

function SvgToiconIconFeatherCollect({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" {...props}>
      <path
        className="Toicon-icon-feather-collect_svg__feather_een"
        d="M20 10.5a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3a.5.5 0 01.5.5zm-7.5.5h-2a.5.5 0 000 1h2a.5.5 0 000-1zm0 2h-2a.5.5 0 000 1h2a.5.5 0 000-1zm15.019 2.824l-2.988.261a.5.5 0 00.043.998l.045-.002 2.988-.261a.5.5 0 00-.088-.996zm3.449 10.74a3 3 0 01-2.727 3.25l-1.992.174a3 3 0 01-3.25-2.727L22 15.844V27a3 3 0 01-3 3h-2a2.994 2.994 0 01-2.5-1.345A2.994 2.994 0 0112 30h-1a2.994 2.994 0 01-2.5-1.345A2.994 2.994 0 016 30H4a3 3 0 01-3-3V7a3 3 0 013-3h2a3 3 0 013 3v1.779A2.978 2.978 0 0111 8h1c.772 0 1.468.3 2 .779V6a3 3 0 013-3h2a3 3 0 013 3v7.124a3.001 3.001 0 012.593-2.064l1.992-.174a3 3 0 013.25 2.727l1.133 12.951zM8 27V7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2zm6-16c0-1.103-.897-2-2-2h-1c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h1c1.103 0 2-.897 2-2V11zm7-5c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v21c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6zm8.972 20.651L28.839 13.7a2.012 2.012 0 00-2.167-1.818l-1.992.174a1.992 1.992 0 00-1.358.707 1.987 1.987 0 00-.46 1.46l1.133 12.951a2.012 2.012 0 002.167 1.818l1.992-.174c.532-.047 1.014-.298 1.358-.707s.507-.928.46-1.46zm-5.529-11.562l2.989-.262a.5.5 0 00.454-.542.493.493 0 00-.542-.454l-2.989.262a.5.5 0 00.043.998l.045-.002zM19.5 6h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0 2h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-13 3h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0-4h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0 2h-3a.5.5 0 000 1h3a.5.5 0 000-1z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgToiconIconFeatherCollect;