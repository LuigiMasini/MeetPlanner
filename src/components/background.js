import React from 'react'
import styled from 'styled-components'

import * as images from '../svg/pattern_images'

function n2A (n){
	let a=[], i=0;
	while(i<n)a[i]=i++;
	return a;
}

function pickRandomProperty(obj) {
	var result;
	var count = 0;
	for (var prop in obj)
		if (Math.random() < 1/++count)
			result = prop;
		return obj[result];
}

const randomIcons = (n=10*10) =>n2A(n).map(key=>{
	
	const Component = pickRandomProperty(images)
	
	return <Component key={key} color="#e5e5e5" width='100%' height='100%' style={{transform:"rotate("+(Math.floor(Math.random() * 3)*90)+"deg) scale("+(Math.random() * (1 - .6) + .6)+")"}}/>
	
})//

class Background extends React.Component{
	constructor(props){
		super(props)
		
		const cellSize = 60
		const gap = 25
		const n = Math.floor(Math.max(window.innerWidth, window.innerHeight)/(cellSize+gap))+1
		
		this.state={
			n,
			gap,
			cellSize,
			arr:randomIcons(n*n)
		}
		
// 		setTimeout(()=>setInterval(()=>this.setState(randomIcons()), 5000), 4000)
	}
	render(){
		return (
			<ContContainer {...this.props}>
				<Container>
					<div className="position">
						<Grid {...this.state}>
							{ this.state.arr }
						</Grid>
					</div>
				</Container>
			</ContContainer>
		)//
	}
}

const Grid = styled.div`
	
	display:grid;
	gap:${props=>props.gap}px;
	grip-gap:${props=>props.gap}px;
	
	grid-template-columns: repeat(${props=>props.n}, ${props=>props.cellSize}px);
	grid-template-rows: repeat(${props=>props.n}, ${props=>props.cellSize}px);
`

const Container = styled.div`
	width:100%;
	height:100%;
	overflow:hidden;
	position:relative;
	
	.position{
		position:absolute;
		width:0;
		height:0;
		left:50%;
		top:50%;
		transform:rotate(-45deg);
		
		display:flex;
		align-items:center;
		justify-content:center;
	}
`

const ContContainer = styled.div`
	width:100%;
	height:100%;
	position:absolute;
	z-index:-1;
`

export default Background