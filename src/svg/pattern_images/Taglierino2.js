import * as React from "react";

function SvgTaglierino2({color, ...props}) {
const currentColor = typeof color === "string" ? color : '#454545'
  return (
    <svg width={25.669} height={50.578} viewBox="0 0 25.669 50.578" {...props}>
      <path
        d="M12.834 50.578C5.75 50.578 0 45.288 0 38.756v-20.77l.483-.782 14.513-7.406 1.265.782v16.79c5.497 1.404 9.408 6.073 9.408 11.386 0 6.509-5.774 11.822-12.835 11.822zM1.748 18.515v20.24c0 5.544 4.968 10.052 11.086 10.052S23.921 44.3 23.921 38.756c0-4.738-3.704-8.901-8.833-9.844l-.506-1.081h-.092V12.029z"
        fill={currentColor}
      />
      <path
        d="M10.925 26.865h-5.52l-.874-.874v-5.406l.437-.759 5.52-3.289 1.334.76v8.694zm-4.669-1.748h3.772v-6.28l-3.772 2.254zM8.142 39.56a3.642 3.642 0 01-3.634-3.633V30.82l.874-.874h5.52l.874.874v5.106c.023 2-1.61 3.634-3.634 3.634zm-1.886-7.865v4.232c0 1.035.851 1.886 1.886 1.886a1.895 1.895 0 001.886-1.886v-4.232z"
        fill={currentColor}
      />
      <path
        d="M12.834 31.695H3.45l-.874-.874v-4.83l.874-.874h9.384l.874.874v4.83zm-8.487-1.771h7.636v-3.06H4.347z"
        fill={currentColor}
      />
      <path
        d="M12.834 31.695H3.45l-.874-.874v-4.83l.874-.874h9.384l.874.874v4.83zm-8.487-1.771h7.636v-3.06H4.347zM4.462 17.02l-1.265-.782V4.761l.46-.782L11.201 0l1.288.782v11.73l-.483.782zm.483-11.753v9.545l5.796-2.875V2.208zM19.435 48.255l-6.877-4.853H1.587v-1.748h11.247l.483.16 7.13 5.015z"
        fill={currentColor}
      />
      <g>
        <path
          fill={currentColor}
          d="M11.225 6.496l.784 1.562L7.343 10.4l-.784-1.562z"
        />
      </g>
      <g
        strokeMiterlimit={10}
        fill="none"
        stroke={currentColor}
        strokeWidth={5}
        strokeLinejoin="bevel"
      >
        <path
          d="M15.25 28.038l.137-.23v-17.25L.874 17.962v20.77c0 6.049 5.36 10.948 11.96 10.948 6.601 0 11.96-4.899 11.96-10.948 0-5.267-4.094-9.66-9.545-10.695z"
          strokeWidth={1.1500000000000001}
        />
        <path
          d="M5.382 20.585l5.543-3.312v8.718H5.382zM5.382 30.82h5.52v5.107a2.768 2.768 0 01-2.76 2.76h0a2.768 2.768 0 01-2.76-2.76z"
          strokeWidth={1.1500000000000001}
        />
        <path
          d="M3.45 25.99h9.384v4.83H3.45z"
          strokeWidth={1.1500000000000001}
        />
        <path
          d="M3.45 25.99h9.384v4.83H3.45zM11.615 12.49l-7.544 3.748v-11.5L11.615.76zM1.587 42.528h11.247l7.107 5.014M6.946 9.614l4.67-2.346"
          strokeWidth={1.1500000000000001}
        />
      </g>
    </svg>
  );
}

export default SvgTaglierino2;
