import React from 'react'
import Styled from 'styled-components'

function BurgerMenu ({
	width="calc(7.2vw + 3.3vh)",
	height="calc(5.4vw + 2.5vh)",
	thickness="5px",
	openColor,
	isOpen, onClick, className, ...props
	}){
	
	return (
		<BurgerMenuStyles width={width} height={height} openColor={openColor} thickness={thickness} className={typeof className === "string" ? className : ''} onClick={onClick} isOpen={isOpen} {...props}>
			<div><span/></div>
			<div><span/></div>
			<div><span/></div>
			<div><span/></div>
			<div><span/></div>
			<div><span/></div>
		</BurgerMenuStyles>
	)//
}

const BurgerMenuStyles = Styled.div`
	
	width:${props=>props.width}; //60px;
	height:${props=>props.height}; //45px;
	position: relative;
	transform: rotate(0deg);
	transition: .5s ease-in-out;
	cursor: pointer;
	
	transform:scale(.6);
	
	div{
		position: absolute;
		width:0;
		height:0;
		transition: .25s ease-in-out;
		left:calc(${props=>props.width}/2);//
		
		span {
			display: block;
			position:absolute;
			height: ${props=>props.thickness}!important;
			width: calc(${props=>props.width} / 2);//
			top:calc(${props=>props.thickness} / -2);//
			background-color: ${props=>props.isOpen ? (props.openColor ? props.openColor : "#454545") : "#454545"};
			opacity: 1;
			transform: rotate(0deg);
			transition: inherit;
		}
		
		&:nth-child(1), &:nth-child(2) {
			top:${props=>props.isOpen ? `calc(${props.height} / 2)` : 0};//
		}
		
		
		&:nth-child(3), &:nth-child(4){
			top:calc(${props=>props.height} / 2);//
		}
		
		&:nth-child(5), &:nth-child(6) {
			top: ${props=>props.isOpen ? `calc(${props.height}/2)` : props.height};//
		}
		
		&:nth-child(odd) span {
			left:calc(${props=>props.width} / -2);//
			border-radius:calc(${props=>props.thickness} / 2) 0 0 calc(${props=>props.thickness} / 2);
		}
		
		&:nth-child(even) span {
			border-radius:0 calc(${props=>props.thickness} / 2) calc(${props=>props.thickness} / 2) 0;
		}
		
		${props=>props.isOpen && `
			&:nth-child(1), &:nth-child(6){
				transform:rotate(45deg);
			}
			&:nth-child(2), &:nth-child(5){
				transform:rotate(-45deg);
			}
			
			&:nth-child(3){
				left:0;
				opacity:0;
			}
			
			&:nth-child(4){
				left:${props.width};
				opacity:0;
			}
			
			`
		}
		
	}

`

export default BurgerMenu