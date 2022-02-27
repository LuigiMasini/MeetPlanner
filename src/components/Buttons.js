import React from 'react'
import styled from 'styled-components'

import Loading from './Loading'

function ConfirmationButton({text, confirmationText, skipConfirmation, action, time, active, title,...props}){
	
	const [afterText, setAfterText] = React.useState("")
	const [step, setStep] = React.useState(0)
	const [isActive, setIsActive] = React.useState(typeof active === "boolean" ? active : true)
	const [to, setTo] = React.useState()
	
	const next=()=>{
		if (!isActive)
			return
			
		switch(step){
			case 0:
				if (!skipConfirmation){
					setStep(1)
					setTo(setTimeout(()=>setStep(0), typeof time === "number" ? time : 5000))
					return
				}
			case 1:
				setStep(2)
				!!to && clearTimeout(to)
				typeof action === "function" && action((keepActive, afterText)=>{
					!!afterText && setAfterText(afterText)
					var ka = !!keepActive || false
					setStep(!!afterText? 3 : 0)
					setIsActive(ka)
				})
				return
			default:
			case 2:
				return
			case 3:
				setStep(0)
				return
		}
	}
// 			(this.state.deleting ? <Loading style={{transform:'scale(.25)'}}/> : 
	
	//"l'azione non è reversibile"
	
	const contentBy = (step) => {
		switch(step){
			default:
			case 0: return text
			case 1: return !!confirmationText ? confirmationText : "Click per confermare"
			case 2: return <Loading style={{transform:'scale(.25)'}}/>//
			case 3: return afterText
	}}
	
	return(
		<Button step={step} onClick={next} isActive={isActive} title={title ? title : !isActive ? "Il bottone non è attivo" : "L'azione non è reversibile" }>
			{contentBy(step)}
		</Button>
		
	)//
}

const mobileScaleFactor=1.3

const Button = styled.button`
	width:calc(100% - .26vw * 4);	//2 margin x cell * 2 cell (cells above in tutoring profile)
	height:calc(1.2vw + 2.3vh);
	border-radius:calc((.5vw + .9vh)/2);
	border:none;
	cursor:pointer;
	font:500 calc(.4vw + .9vh) Rubik;
	padding:0;
	margin:.26vw;
	color:#fff;
	
	@media (orientation: portrait){
		height:calc((1.2vw + 2.3vh)*${mobileScaleFactor});
		font-size:calc((.4vw + .9vh)*${mobileScaleFactor});
	}
	
	${props=>!!props.step ? `
		background:#fff;
		border:solid #FF9002 2px;
		color:#FF9002;
		`:`
		background:${props.isActive ? '#b52929':'#c8c8c8'};
	`}
`


function AnimatedUnderlineButton({title, color, inactive, errMsg,...props}){
	return (
		<LinedAnimations color={color} inactive={inactive} {...props} title={inactive ? errMsg : undefined}>
		{title}
		<div className="linea"/>
		</LinedAnimations>
	)
}


const LinedAnimations = styled.div`
	
	${props=>!props.inactive && 'cursor:pointer;'}
	
	a {
		font-size:calc(.6vw + .9vh);
		color:#454545;
	}
	
	@media (orientation: portrait){
		
		a{
			font-size:calc(3.6vw + 1.7vh);
			color:#fff;
		}
	}
	
	.linea{
		background-color:${props=>props.color ? props.color : '#454545'};
		height:1px;
		width:0;
		transition:.2s;
		
		@media (orientation: portrait){
			display:none;
		}
	}
	
	&:hover{
		.linea{
			${props=>!props.inactive && 'width:100%;'}
		}
	}
`

export {ConfirmationButton, AnimatedUnderlineButton}