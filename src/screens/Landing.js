import React from "react"

import Landing from './Landing-styles'
import Background from '../components/background'
import Header from '../components/MainToolbar'
import HideScrollBar from '../components/HideScrollBar'

import logo from '../svg/logo.svg';

import {login} from '../components/firebase'

function LandingPage (props) {
	
	const scrollerRef = React.useRef()
	
	const loginProcess = () => {
		login()
		.then( res=> {
			const isNew = res.additionalUserInfo.isNewUser
			
			typeof props.setIsNew === 'function' && props.setIsNew(isNew)		
		})
	}
	
	return (
		<Landing>
			{/*<Header/>*/}
			<Background/>
			<HideScrollBar Ref={scrollerRef}>
				<section id="start">
					<h1 style={{fontFamily:'WorkSans'}}>Meet Planner</h1>
					
					<h3>Planning di lezioni e corsi</h3>
					<i>Semplice ed efficace</i>
					
					<div onClick={loginProcess}>Login</div>
					
				</section>
				
				<section id="vantaggi" className="centerContent">
					<h1 style={{fontFamily:'WorkSans'}}>Meet Planner</h1>
					
					<h3>Planning di lezioni e corsi</h3>
					<i>Semplice ed efficace</i>
				</section>
			</HideScrollBar>
		</Landing>
	);
}

export default LandingPage