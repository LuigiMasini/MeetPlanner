import styled from 'styled-components'

const HomePage = styled.main`
	height:100%;
	
	.scrollerContainer {
		height:70%;
	}
	
	.boxesContainer {
		height:100%;
		width:${props=>props.openTabNum > 2 ? '120%' : '100%' };
		
		display:flex;
		align-items:center;
		justify-content:space-evenly;
	}
`

export default HomePage