import * as React from "react";

function SvgScotch2({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={27.108} height={50.571} viewBox="0 0 27.108 50.571" {...props}>
      <path
        d="M5.353 50.571H.866L0 49.706V.866L.866 0h4.487l.866.866v48.84zm-3.622-1.73h2.734V1.73H1.73z"
        fill={currentColor}
      />
      <path
        d="M11.572 50.571H5.353l-.865-.865V35.878l.865-.865h6.22l.865.865v13.828zm-5.353-1.73h4.488V36.743H6.219z"
        fill={currentColor}
      />
      <path
        d="M12.392 49.934l-1.708-.251v-36.22l.865-.866h6.105l.866.866v7.38c0 6.857-1.093 13.6-3.28 20.093-1.663 5.08-2.825 8.975-2.848 8.998zm.046-35.583v29.66c.364-1.094.752-2.324 1.184-3.6a61.219 61.219 0 003.19-19.545v-6.515z"
        fill={currentColor}
      />
      <path
        d="M17.677 14.351H9.613l-.866-.865V5.49l.866-.866h8.064l.866.866v7.996zm-7.198-1.73h6.333V6.355h-6.333z"
        fill={currentColor}
      />
      <path
        d="M18.019 50.571h-6.447l-.843-1.116c.023-.045 1.185-3.963 2.893-9.043a61.219 61.219 0 003.19-19.546v-20l1.161-.82 3.645 1.32c3.28 1.185 5.49 4.352 5.49 7.837V41.46c0 5.012-4.077 9.112-9.09 9.112zm-5.285-1.754h5.262v.866-.866c4.055 0 7.358-3.303 7.358-7.358V9.203a6.647 6.647 0 00-4.35-6.219l-2.484-.888v18.77a62.626 62.626 0 01-3.28 20.092c-1.14 3.44-2.028 6.356-2.506 7.86z"
        fill={currentColor}
      />
      <g
        strokeMiterlimit={10}
        fill="none"
        stroke={currentColor}
        strokeWidth={5}
        strokeLinejoin="bevel"
      >
        <path
          d="M.866.866h4.487v48.84H.866zM5.353 35.856h6.22v13.827h-6.22z"
          strokeWidth={1.139}
        />
        <path
          d="M17.677 13.486v7.38a62.394 62.394 0 01-3.235 19.819c-1.73 5.148-2.87 9.02-2.87 9.02v-36.22z"
          strokeWidth={1.139}
        />
        <path d="M9.613 5.49h8.064v7.996H9.613z" strokeWidth={1.139} />
        <path
          d="M11.572 49.706s1.162-3.873 2.87-9.021a62.29 62.29 0 003.235-19.819v-20l3.645 1.32a7.457 7.457 0 014.92 7.04v32.256a8.22 8.22 0 01-8.223 8.224z"
          strokeWidth={1.139}
        />
      </g>
    </svg>
  );
}

export default SvgScotch2;
