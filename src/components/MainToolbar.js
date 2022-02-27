import React from 'react'
import styled from 'styled-components';

import firebase from "firebase/app";
import 'firebase/auth'

import Logo from '../svg/logo'
import BurgerMenu from './BurgerMenu'

import {AnimatedUnderlineButton as AnimatedButton} from './Buttons'

function Toolbar ({toTop, hideMenu, ...prop}) {
	
	const [isOpen, setIsOpen] = React.useState(false)
	
	const login = () => {
		const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(googleAuthProvider);
	}
	
	return (
		<Nav menuOpen={isOpen}>
			<a className="home scroll" href="#start">
				<Logo/>
				<span>Meet Planner</span>
			</a>
			
			{!hideMenu && <>
			<BurgerMenu
				onClick={()=>setIsOpen(!isOpen)}
				isOpen={isOpen}
				style={{zIndex:100000}}
				className="BurgerMenu"
				height="calc((3.6vw + 1.7vh)*1.2)"
				width="calc((3.6vw + 1.7vh)*1.7)"
				thickness="4px"
				openColor="#fff"
				/>
			
			<div className="links">
				
				<AnimatedButton title={<a href="#vantaggi" className="scroll">COSA FACCIAMO</a>} onClick={()=>setIsOpen(false)}/>
				<div className="spacer"/>
				<AnimatedButton title={<a href="#peer2peer" className="scroll">METODO</a>} onClick={()=>setIsOpen(false)}/>
				<div className="spacer"/>
				<AnimatedButton title={<a href="#contattaci" className="scroll">CONTATTACI</a>} onClick={()=>setIsOpen(false)}/>
				<AnimatedButton title={<div className="loginButton" onClick={login}>ACCEDI</div>} className="accedi" />
				
			</div>
			</>}
		</Nav>
	)//
}

const Nav = styled.nav`
	display:inline-flex;
	flex-direction:row;
	align-items:center;
	justify-content:space-between;
	height: calc(4.7vh + 3vw);
	width: 100%;
	padding:0 calc(1.3vw + 1.3vh);
	box-sizing:border-box;
	
	float:left;	//put nav out of container block flow, so that its margin-top is not collapsed
	
	position:fixed;
	top:0;
	
	background:white;
	z-index:10;
	
// 	box-shadow: 0 0.3vw 0.5vw rgba(0, 0, 0, 0.16);
// 	border-bottom: solid #C8C8C8 .5px;
	
	
	a, a:visited {
		all:unset;
	}
	
	@media (orientation:portrait){
		padding:0 calc(4vw + 2.2vh);
		height:calc(9.3vw + 5.2vh);
	}
	
	.home {
		display:flex;
		align-content:center;
		font-size:calc(.7vw + 1.2vh);
		cursor:pointer;
		color:#454545;
		
		svg {
			height:calc(.73vw + 1.3vh);
			width:auto;
			margin-right:calc((1.3vw + 1.3vh)/5);
			
			@media (orientation:portrait){
				height:calc(4vw + 2.2vh);
			}
		}
		
		@media (orientation:portrait){
			span{
				display:none;
			}
		}
	}
	
	@media (orientation:landscape){
		.BurgerMenu{
			display:none;
		}
	}
	
	.links{
		width: 40vw;
		display:flex;
		justify-content:space-between;
		
		.spacer{
			display:none;
		}
		
		@media (orientation:portrait){
			${props=>!props.menuOpen ?
				`
				width:0;
				height:0;
				top:50vh;
				left:50vw;
				opacity:0;
				
				* {
					display:none!important;
				}
				`
				:
				`
				opacity:1;
				width:100vw;
				height:100vh;
				top:0;
				bottom:0;
				left:0;
				right:0;
				`
			}
			
			background:#62abe3;
			position:fixed;
			transition:.2s;
			flex-direction:column;
			justify-content:center;
			color:#fff;
			align-items:center;
			
			.spacer{
				display:block;
				height:1px;
				background:#fff;
				width:90vw;
				margin:calc(3.6vw + 1.7vh) 0;
			}
			
			.accedi {
				display:none;
			}
			
		}
		
		
		.loginButton{
			color:#62abe3;
		}
	}
`;

export default Toolbar
