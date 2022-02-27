import * as React from "react";

function SvgCalcolatrice({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={35.859} height={50.54} viewBox="0 0 35.859 50.54" {...props}>
      <path
        d="M32.422 50.54H3.437A3.44 3.44 0 010 47.102V3.437A3.44 3.44 0 013.437 0h28.985a3.44 3.44 0 013.437 3.437v43.665a3.44 3.44 0 01-3.437 3.438zM3.437 2.04c-.776 0-1.397.621-1.397 1.397v43.665c0 .776.621 1.397 1.397 1.397h28.985c.776 0 1.397-.62 1.397-1.397V3.437c0-.776-.621-1.397-1.397-1.397z"
        fill={currentColor}
      />
      <path
        d="M31.779 15.79H4.059V4.057h27.72zm-25.68-2.04h23.64V6.097H6.098zM1.02 17.43H34.84v2.04H1.02zM14.836 31.512H4.48v-9.18h10.356zm-8.316-2.04h6.276v-5.1H6.52z"
        fill={currentColor}
      />
      <path
        d="M23.152 31.512H12.796v-9.18h10.356zm-8.316-2.04h6.276v-5.1h-6.276z"
        fill={currentColor}
      />
      <path
        d="M14.836 38.653H4.48v-9.18h10.356zm-8.316-2.04h6.276v-5.1H6.52z"
        fill={currentColor}
      />
      <path
        d="M23.152 38.653H12.796v-9.18h10.356zm-8.316-2.04h6.276v-5.1h-6.276z"
        fill={currentColor}
      />
      <path
        d="M14.836 45.794H4.48v-9.181h10.356zm-8.316-2.04h6.276v-5.1H6.52z"
        fill={currentColor}
      />
      <path
        d="M23.152 45.794H12.796v-9.181h10.356zm-8.316-2.04h6.276v-5.1h-6.276zM31.49 31.512H21.134v-9.18H31.49zm-8.338-2.04h6.276v-5.1h-6.276z"
        fill={currentColor}
      />
      <path
        d="M31.49 45.794H21.134V29.472H31.49zm-8.338-2.04h6.276v-12.22h-6.276z"
        fill={currentColor}
      />
    </svg>
  );
}

export default SvgCalcolatrice;
