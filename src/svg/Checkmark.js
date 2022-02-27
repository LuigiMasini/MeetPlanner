import * as React from "react";

function SvgCheckmarkSymbol(props) {
	
	const color = typeof props.color === "string" ? props.color : '#454545'
	
	return (
		<svg viewBox="0 0 32 32" {...props}>
			<path d="M28.281 6.281L11 23.563 3.719 16.28 2.28 17.72l8 8 .719.687.719-.687 18-18z" fill={color}/>
		</svg>
	);
}

export default SvgCheckmarkSymbol;
