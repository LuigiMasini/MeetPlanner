import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	overflow:hidden!important;
	
	//following is just default, u can pass style to HideScrollBar & adjust them
	width: 100%;
	height: 100%;
`

const Scroller = styled.div`
	width: 100%;
	height: 100%;
	
	${props=>{
		switch(props.direction){
			default:
			case 'both':
			case 3:
				return 'overflow: auto'
			case 'horizontal':
			case 2:
				return 'overflow-y:hidden;overflow-x:auto'
			case 'vertical':
			case 1:
				return 'overflow-y:auto;overflow-x:hidden'
			case 'none':
			case 0:
				return 'overflow:hidden'
		}
	}};
	
	padding-right: 15px; /*This would hide the scroll bar of the right. To be sure we hide the scrollbar on every browser, increase this value*/
	padding-bottom: 15px; /*This would hide the scroll bar of the bottom if there is one*/
	/*sometimes it might be helpful trying out margin*/
	box-sizing:content-box;
	scroll-behavior: smooth;
`

const HideScrollBar = ({children, Ref, direction, scrollerRef, ...props}) =>
	<Container {...props} ref={Ref}>
		<Scroller direction={direction} ref={scrollerRef}>
			{children}
		</Scroller>
	</Container>

export default HideScrollBar