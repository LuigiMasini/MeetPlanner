import * as React from "react"

function SvgComponent(props) {
	return (
		<svg width={16} height={25} viewBox="0 0 16 25" fill="none" {...props}>
		<path
		fillRule="evenodd"
		clipRule="evenodd"
		d="M14.483 3.957l-2.88-2.88a2.037 2.037 0 012.88 2.88zm0 0l-2.88-2.88L.08 12.6l11.523 11.523a2.037 2.037 0 102.88-2.88L5.842 12.6l8.643-8.643z"
		fill="#454545"
		/>
		</svg>
	)
}

export default SvgComponent
