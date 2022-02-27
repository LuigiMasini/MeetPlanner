import React from "react"
import styled from "styled-components"

import HideScrollBar from './HideScrollBar'

import {cloneDeep} from 'lodash'

import {date2Str, weekDays_M2S, str2Date, date2Str2, today, getMonday, monthNames} from "../utils/dates"

import Arrow from '../svg/Arrow'

//BEGIN
//variables to edit
//values are in px, 1 px equals 1 minute
// WARNING TMP finche ema non si mette al passo

const snap = 5
const defaultDuration = 60
const minDuration = 10
//END

function n2a(n){
	var a = [];
	for (let i=0; i<n; i++)
		a.push(i)
	return a
}

//convert pixels to time (1px === 1min)
function p2h(pn){
	let h = Math.floor(pn/60)
	let m = Math.floor((pn/60 - h )*60)
	return ("0"+h).slice(-2)+":"+("0"+m).slice(-2)
}

function h2p(hs = "00:00"){
	let h = parseInt(hs.slice(0,2))
	let m = parseInt(hs.slice(-2))
	return h*60 + m
}

function areOverlapping(box, boxes){
	if (boxes.length === 0)
		return false
	
	let newBoxes = boxes.map((b,n)=>{return b === null ? null : {...b, bottom:b.top+b.height}})
	let newBox = {...box, bottom:box.top+box.height};
	//console.log(newBox, newBoxes)
	let i=0;
	while( i<boxes.length && ( newBoxes[i] === null || newBox.top >= newBoxes[i].bottom || newBox.bottom <= newBoxes[i].top))i++;
	return i < boxes.length;
}

function discardItem(arr, n){
	return arr.slice(0,n).concat(arr.slice(n+1,arr.lenght))
}

class RectangleComponent extends React.PureComponent {
	state={
		active:false,
		top:this.props.box.top,
		height:this.props.box.height,
	}
	
	static getDerivedStateFromProps(props,state){
		//console.log("new:",props.box)
		const {height, top} = props.box
		if (height === state.oriHeight && top===state.oriTop)
			return null
		return {
			top:top,
			oriTop:top,
			height:height,
			oriHeight:height
		}
	}
	
	resizeBottom = (e) => {
		let y=0
		if(e.type === 'touchmove'){
			const touch = e.touches[0] || e.changedTouches[0];
			y = touch.pageY;
		} else if (e.type === 'mousemove') {
					y = e.pageY;
		}
		var height = this.props.box.height + (y - this.state.original_mouse_y) + (this.props.containerRef.scrollTop - this.state.origContScrollTop);
		
		height = height-height%snap+(height%snap>snap/2?snap:0)
		if (height >= minDuration && height !== this.state.height && this.props.box.top+height<=60*24 && !areOverlapping({height, top:this.props.box.top}, discardItem(this.props.boxes,this.props.Key))){
			this.setState({height})
		}
	}
	
	resizeTop = (e) => {
		let y=0
		if(e.type === 'touchmove'){
			const touch = e.touches[0] || e.changedTouches[0];
			y = touch.pageY;
		} else if (e.type === 'mousemove') {
					y = e.pageY;
		}
		var delta = (y - this.state.original_mouse_y) + (this.props.containerRef.scrollTop - this.state.origContScrollTop);
		
		delta = delta-delta%snap+(delta%snap>snap/2?snap:0)
		
		const height = this.props.box.height - delta
		const top = this.props.box.top + delta
		
		//console.log(delta, this.props.box.height, height, this.props.box.top, top)
		
		if (height >= minDuration && height !== this.state.height && top>=0 && !areOverlapping({height, top}, discardItem(this.props.boxes,this.props.Key))){
			this.setState({height, top})
		}
		
	}
	
	applyResizing = (e) =>{
		if (!this.state.active)
			return
		document.body.style.cursor = "default"
		
		if(e.type === 'touchend'){
			window.removeEventListener("touchmove", this.resizeBottom)
			window.removeEventListener("touchmove", this.resizeTop)
			window.removeEventListener("touchend", this.applyResizing)
		}
		else if (e.type === 'mouseup') {
			window.removeEventListener("mousemove", this.resizeBottom)
			window.removeEventListener("mousemove", this.resizeTop)
			window.removeEventListener("mouseup", this.applyResizing)
		}
		else if (e.type === 'pointerup') {
			window.removeEventListener("pointermove", this.resizeBottom)
			window.removeEventListener("pointermove", this.resizeTop)
			window.removeEventListener("pointerup", this.applyResizing)
		}
		
		const {height, top} = this.state
		this.props.update({height, top})
	}
	
	preResizeBottom=(e)=>{
		let y=0
		if(e.type === 'touchstart'){
			const touch = e.touches[0] || e.changedTouches[0];
			y = touch.pageY;
    } else if (e.type === 'mousedown') {
			y = e.pageY;
    }
		this.setState({
			active:true,
			original_mouse_y:y,
			origContScrollTop:this.props.containerRef.scrollTop,
		})
		
		if(e.type === 'touchstart'){
			window.addEventListener("touchmove", this.resizeBottom)
			window.addEventListener("touchend", this.applyResizing)
		}
		else if (e.type === 'mousedown') {
			window.addEventListener("mousemove", this.resizeBottom)
			window.addEventListener("mouseup", this.applyResizing)
		}
		
		document.body.style.cursor = "row-resize"
	}
	
	preResizeTop=(e)=>{
		let y=0
		if(e.type === 'touchstart'){
			const touch = e.touches[0] || e.changedTouches[0];
			y = touch.pageY;
    } else if (e.type === 'mousedown') {
			y = e.pageY;
    }
		this.setState({
			active:true,
			original_mouse_y:y,
			origContScrollTop:this.props.containerRef.scrollTop,
		})
		//console.log("orig Top:", e.pageY)
		if(e.type === 'touchstart'){
			window.addEventListener("touchmove", this.resizeTop)
			window.addEventListener("touchend", this.applyResizing)
		}
		else if (e.type === 'mousedown') {
			window.addEventListener("mousemove", this.resizeTop)
			window.addEventListener("mouseup", this.applyResizing)
		}
		else if (e.type === 'pointerdown'){
			window.addEventListener("pointermove", this.resizeTop)
			window.addEventListener("pointerup", this.applyResizing)
		}
		document.body.style.cursor = "row-resize"
	}
	
	render (){
		const {remove, box, resizable} = this.props
		const {height, top} = this.state
		
		if (box===null || this.state.invisible)
			return null
		
		return (
			<Rect height={height} top={top} ref={ref=>this.boxRef=ref}>
				{"Dalle "+p2h(top)+" alle "+p2h(top+height)}
				{resizable !== false && 
				<>
				<HandleTop onMouseDown={this.preResizeTop} onTouchStart={this.preResizeTop} time={p2h(top)}/>
				<HandleBottom onMouseDown={this.preResizeBottom} onTouchStart={this.preResizeBottom} time={p2h(top+height)}/>
				</>
				}
				<HandleClose onClick={e=>{this.setState({invisible:true});remove(e)}}>+</HandleClose>
			</Rect>
		)//
	}
}

const Handle = styled.div`
	box-sizing:border-box;
	border-radius:50%;
	height:12px;
	width:12px;
	//border:solid blue 2px;
	border: 1px solid #454545;
	background:#62abe3;
	position:absolute;
	
	user-select:none;
	
	&::after {
		content:"${props=>props.time}";
		opacity:0;
		transition:.2s;
	}
	&:hover::after{
		opacity:1;
	}
`

const HandleTop = styled(Handle)`
	top:calc(12px / -2);
	left:calc(50% - 12px / 2 - 1px);
	cursor:row-resize;
`

const HandleBottom = styled(Handle)`
	bottom:calc(12px / -2);
	left:calc(50% - 12px / 2 - 1px);
	cursor:row-resize;
`
const HandleClose = styled(Handle)`
	transform: rotate(45deg);
	top:calc(25px / -2);
	right:calc(25px / -2);
	font-size:15px;
	cursor:pointer;
	display:flex;
	align-items:center;
	justify-content:center;
	background:#fff;
	width:25px;
	height:25px;
	border-width:2px;
	
	@media (orientation:portrait){
		right:2px;
	}
`

const Rect = styled.div`
	box-sizing:border-box;
	width:calc(18vw + 29vh);
	height:${props=>props.height}px;
	position:absolute;
	top:${props=>props.top}px;
	
	background:rgba(98, 171, 227, 0.3);
	//border:solid red 2px;
	transition:.1s;
	padding:12px;
	font-size:15px;
	color:#454545;
	
	@media (orientation:portrait){
		width:calc(100% - 50px - 12px);
	}
`

class Timeline extends React.PureComponent {
	state={
		top:60*13,
		settingNew:false,
		boxes:[],
	}
	
	static getDerivedStateFromProps(props, state){
		return {
			boxes:props.sessions || []
		}
	}
	
	
	//after both mounting and updating reset scroll to start from midday
	componentDidMount(){
		if (this.Container)
			this.Container.scrollTop=60*12
	}
	componentDidUpdate(oldProps){
		if (oldProps.dateKey !== this.props.dateKey)
			this.componentDidMount()
	}
	
	handleMove=(e)=>{
		let y=0
		if(e.type === 'touchmove'){
			const touch = e.touches[0] || e.changedTouches[0];
			y = touch.pageY;
    } else if (e.type === 'mousemove') {
			y = e.pageY;
    }
		
		if (!this.state.settingNew || !this.Container)
			return
		const contRect = this.Container.getBoundingClientRect()
		const scrollTop = this.Container.scrollTop;
		const rect = this.NewRect.getBoundingClientRect()
		var top = y-contRect.top-rect.height/2+scrollTop
		top = top-top%snap+(top%snap>snap/2?snap:0)
		if (top!==this.state.top && top>=0 && top+defaultDuration<=60*24)
			this.setState({top})
	}
	
	fixPosition =()=>{
		const {boxes, top} = this.state
		
		if (areOverlapping({top:this.state.top, height:defaultDuration}, this.state.boxes))
			return;
		
		//look for first empty box (deleted), if none add
		let i=0;
		while(i<boxes.length && boxes[i]!==null)i++;
		if (i<boxes.length)
			boxes[i]={top, height:defaultDuration}
		else
			boxes.push({top, height:defaultDuration})
		
		//console.log(boxes)
		
		this.setState({settingNew:false, boxes})
		typeof this.props.setDispos === "function" && this.props.setDispos(boxes)
	}
	
	updateBox = (n, box) =>{
		var boxes = this.state.boxes
		boxes[n]=box
		//console.log(this.state.boxes[n], box)
		this.setState({boxes})
		typeof this.props.setDispos === "function" && this.props.setDispos(boxes)
		this.forceUpdate()		//a quanto pare un cambiamento di stato e di props non sono sufficienti
	}
	
	removeBox = (n) =>{
		var {boxes} = this.state
		boxes[n]=null
		this.setState({boxes})
		typeof this.props.setDispos === "function" && this.props.setDispos(boxes)
	}
	
	render(){
		
		if (this.props.onlyHours)
			return (
				<Container {...this.props}>
					{
						n2a(24).map((a, n)=><Hour key={n}>{('0'+n).slice(-2)}:00</Hour>)
					}
				</Container>
			)
		
		return (
			<Container ref={ref=>this.Container=ref} onTouchMove={this.handleMove} onMouseMove={this.handleMove}>
				{
					n2a(24).map((a, n)=><Line key={n}/>)
				}
				{
					this.state.boxes.map((box, n)=>box&&<RectangleComponent key={n} box={box} update={(box)=>this.updateBox(n, box)} remove={()=>this.removeBox(n)} containerRef={this.Container} boxes={this.state.boxes} Key={n} resizable={false}/>)
				}
				{ this.state.settingNew &&
					<Mooving top={this.state.top} ref={ref=>this.NewRect=ref} onClick={this.fixPosition} onContextMenu={e=>{e.preventDefault();this.setState({settingNew:false})}} valid={!areOverlapping({top:this.state.top, height:defaultDuration},this.state.boxes)}/>
				}
			</Container>
		)//
	}
}

const Mooving = styled.div`
	position:absolute;
	background:${props=>props.valid?"rgba(98, 171, 227, 0.3)":"rgba(235, 115, 115, 0.5)"};
	width:calc(18vw + 29vh);
	height:${defaultDuration}px;
	top:${props=>props.top}px;
	transition:.05s;
	
	@media (orientation:portrait){
		width:calc(100% - 50px);
	}
`

const Line = styled.div`
	width:100%;
	height:60px;
	border-top:solid #C8C8C8 1px;
	box-sizing:border-box;
`

const Container = styled.div`
	position:relative;
	
	@media (orientation:portrait){
		width:calc(100% - 50px);
	}
`

const WeekSchedule = ({sessions, edit, ...props}) => {
	
	const [firstWeekDay, setFirstWeekDay] = React.useState(getMonday(today))
	const [displayDays, setDisplayDays] = React.useState(window.innerWidth < window.innerHeight ? 1 : 7 )	//se verticale display solo giorno corrente
	
	const endDate = new Date(new Date().setTime(firstWeekDay.getTime() + 24*60*60*1000*displayDays))
	
	const sessionsByWeekDay = n2a(displayDays)
	.map( num => new Date().setTime(firstWeekDay.getTime() + 24*60*60*1000*num) )
	.map( date => sessions.filter( ({start, end}) => {
		const startDate = new Date(start)
		const endDate = new Date(end)
		
		return ( startDate.getFullYear() === date.getFullYear() && startDate.getMonth() === date.getMonth() && startDate.getDate() === date.getDate() )
		|| ( endDate.getFullYear() === date.getFullYear() && endDate.getMonth() === date.getMonth() && endDate.getDate() === date.getDate() )
	}))
	
	return (
		<WeekScheduleContainer {...props}>
			<div className='header'>
				<span className='editButton' onClick={edit}>Edit</span>
				
				<h4 className='centerContent'>
					<Arrow onClick={()=>setFirstWeekDay(new Date(new Date().setTime(firstWeekDay.getTime() - 24*60*60*1000*displayDays)))}/>
					{firstWeekDay.getDate() + ' ' + monthNames[firstWeekDay.getMonth()].slice(0,3) + ' - ' + endDate.getDate() + ' ' + monthNames[endDate.getMonth()].slice(0,3)}
					<Arrow style={{transform:'rotate(180deg)'}} onClick={()=>setFirstWeekDay(new Date(new Date().setTime(firstWeekDay.getTime() + 24*60*60*1000*displayDays)))}/>
				</h4>
				
				<span className='setDefault' style={{textAlign:'right'}}>Use as default</span>
			</div>
			<div className='planner'>
				<HideScrollBar>
					<div className="days">
						<Timeline onlyHours/>
						{
							sessionsByWeekDay.map((weekDaySessions, weekDay)=><div className="day" key={weekDay}><p>{weekDays_M2S[weekDay].slice(0,3)}</p><Timeline sessions={weekDaySessions}/></div>)
						}
					</div>
				</HideScrollBar>
			</div>
		</WeekScheduleContainer>
	)//
}

const WeekScheduleContainer = styled.div`
	position:relative;
	padding:40px;
	background:#fff;
	border-radius:30px;
	width:500px;
	height:calc(11.5vw + 18.3vh);
	margin:25px;
	
	flex-shrink:0;
	
	h4{
		font-size:20px;
	}
	
	&::before {
		content:" ";
		position:absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		box-shadow: 0px 0px 50px rgba(69, 69, 69, 0.3);
		border-radius:inherit;
	}
	
	.days{
		display:flex;
		width:100%;
		height:100%;
		
		.day{
			flex-grow:1;
			
			p{
				margin:0;
				position:absolute;
				top:0;
				color:#454545;
			}
		}
	}
	
	.header {
		display:flex;
		justify-content:space-between;
		align-items:center;
		margin-top:-20px;
		margin-bottom:10px;
		
		svg {
			height:16px;
			cursor:pointer;
		}
		
		h4 {
			text-transform:capitalize;
		}
		
		span {
			flex:0 0 22.5%;
			color:#a1a1a1;
			cursor:pointer;
			
			&:hover{
				color:#454545;
				text-decoration:underline;
			}
		}
	}
	
	.planner {
		height:90%;
		padding-top:30px;
		position:relative;
	}
`

const Hour = styled.div`
	font-size:10px;
	color:#454545;
	width:100%;
	height:60px;
	border-top:solid #C8C8C8 1px;
	box-sizing:border-box;
`

export default WeekSchedule