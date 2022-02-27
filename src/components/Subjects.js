import React from 'react'

import styled from 'styled-components'

import HideScrollBar from './HideScrollBar'

import {getRandomColor} from '../utils/color'

import firebase from "firebase/app";
import 'firebase/firestore'
import {FirebaseAuthConsumer} from "@react-firebase/auth";

import Bin from '../svg/TrashCan'
import Checkmark from '../svg/Checkmark'

const Subject = ({nick, color, Ref, ...props}) =>{
	return <SubjectCont color={color} ref={Ref} {...props}>{nick}</SubjectCont>//
}

const SubjectWrapper = ({onClick, subRef, scrollerRef, onDragStart, ...props}) => {
	const [hover, setHover] = React.useState(false)
	const [dragging, setDragging] = React.useState(false)
	const a = React.useRef(null)
	const b = React.useRef(null)
	
	React.useEffect(()=>{
		scrollerRef.current.addEventListener('scroll', ()=>{
			setHover(false)
		})
	},[scrollerRef])
	
	/*
	 * 
	 < D*raggable
	 onStart={()=>setDragging(true)}
	 onDrag={()=>setHasDragged(true)}
	 onStop={e=>{setDragging(false);!hasDragged ? typeof onClick === "function" && onClick(e) : (setHasDragged(false) || true) && setHover(false)}}
	 nodeRef={b}
	 >
	 
	 */
	
	return (<div onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(dragging)}>
		<Subject {...props} onClick={onClick} Ref={a}/>
		{ hover && //
			<Subject
				{...props}
				Ref={b}
				draggable='true'
				onWheel={()=>scrollerRef.current.scrollBy(0, 50)}
				onClick={()=>{onClick();setHover(false)}}
				onDragStart={e=>{e.dataTransfer.setData('text', subRef);setDragging(true);typeof onDragStart === "function" && onDragStart(e)}}
				onDragEnd={e=>{setDragging(false);setHover(false)}}
				style={{position:'fixed', top:a.current.getBoundingClientRect().top-1.9+'px', left:a.current.getBoundingClientRect().left-3+'px', zIndex: 999}}
				/>
		}
		</div>
	)//
}

const SubjectCont = styled.div`
	background:${props=>typeof props.color === "string" ? props.color : '#e5e5e5'};
	color:${props=>!props.new?'#fff':'#454545'};
	font-weight: 600;
	font-size:${props=>!props.new?24:36}px;
	
	cursor:pointer;
	
	//smooth moovement
	//transition:.1s;
	
	opacity:.8;
	transform:scale(.94);
	&:hover{
		opacity:1;
		transform:scale(1);
	}
	
	border-radius:10px;
	
	width:100px;
	height:62.5px;	//proporzione aurea
	
	display:flex;
	align-items:center;
	justify-content:center;
	text-align:center;
`

const SubjectEditor = ({subject, docRef, close, ...props})=>{
	
	const [sub, setSub] = React.useState({
		name:subject.name || '',
		nick:subject.nick || '',
		course:subject.course || '',
		color:subject.color || '',
		conference:subject.conference || '',
		whiteboard:subject.whiteboard || '',
	})
	
	const onChange = (e) => {
		var currentSub = sub
		currentSub[e.target.name]=e.target.value
		setSub(currentSub)
		docRef.set(currentSub)
	}
	
	const deleteSub = () => {
		if (window.confirm("Vuoi davvero elimimnare questo corso?")){
			docRef.delete().then(()=>close())
		}
	}
	
	return (
		<SubjectEditorContainer>
			
			<h4>Corso</h4>
			
			<div className='row'>
				Nome:
				<input name='name' type="text" onChange={onChange} value={sub.name}/>
			</div>
			<div className='row'>
				Colore:
				<div className="color">
					<input name='color' type="color" onChange={onChange} value={sub.color}/>
				</div>
			</div>
			<div className='row'>
				NickName:
				<input name='nick' type="text" onChange={onChange} value={sub.nick}/>
			</div>
			
			Link corso:
			<input name='course' type="text" onChange={onChange} value={sub.course}/>
			
			Link lezione:
			<input name='conference' type="text" onChange={onChange} value={sub.conference}/>
			
			Link lavagna
			<input name='whiteboard' type="text" onChange={onChange} value={sub.whiteboard}/>
			
			<div className='icons'>
				<Checkmark onClick={close}/>
				<Bin onClick={deleteSub}/>
			</div>
		</SubjectEditorContainer>
	)//
}

const SubjectEditorContainer = styled.div`
	background:#fff;
	padding:40px 30px;
	border-radius:30px;
	height:calc(11.5vw + 18.3vh);
	width:300px;
	position:relative;
	margin:25px;
	
	flex-shrink:0;
	
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
	
	line-height:30px;
	
	h4 {
		margin-bottom:15px;
		margin-top:-20px;
	}
	
	.icons {
		display:flex;
		justify-content:space-evenly;
		padding-top:15px;
		
		svg {
			height:25px;
			cursor:pointer;
		}
	}
	
	.row {
		display:flex;
		justify-content:space-between;
		align-items:center;
		
		input{
			width:60%;
		}
		
		.color {
			width:16px;
			height:16px;
			margin-right:calc(60% - 16px);
			border-radius:8px;
			overflow:hidden;
			display:flex;
			align-items:center;
			justify-content:center;
			
			input {
				all:unset;
				display:block;
				width:110%;
				height:110%;
				flex-shrink:0;
				cursor:pointer;
			}
		}
	}
	
	input{
		display:block;
		border:none;
		border-bottom: solid #C8C8C8 1px;
		color:#454545;
		padding:0;
		width:100%;
		font-size:14px;
	}
	
	input:focus{
		border-color:#4E4E4E;
	}
`

const SubjectsComponent = ({subjects, subjectsIds, user, selfClose, edit, setDragSub, ...props}) => {
	
	const [editingSubject, setEditingSubject] = React.useState()
	const [editingSubjectRef, setEditingSubjectRef] = React.useState()
	
	const scrollerRef = React.useRef(null)
	
	const close = () => {
		typeof edit === 'function' && edit(false)
		setEditingSubject()
		setEditingSubjectRef()
	}
	
	
	const db = firebase.firestore();
	const subjectsRef = db.collection("users").doc(user.uid).collection('subjects')
	
	const open = (sub, ref) => {
		
		//TODO make SubjectEditor pure & remove close & settimeout from here
		
		close();
		typeof edit === 'function' && edit(true)
		setTimeout(()=>{
			setEditingSubjectRef(ref);
			setEditingSubject(sub)
		}, 0)
	}
	
	return (<>
			{
				!!editingSubject && <SubjectEditor subject={editingSubject} close={close} docRef={editingSubjectRef}/>
			}
			
			<SubjectsContainer>
				<h4>Corsi</h4>
				<h4 onClick={()=>typeof selfClose === "function" && selfClose()} className='closeButton'>x</h4>
				<div className='gridScrollerContainer'>
					<HideScrollBar direction='vertical' scrollerRef={scrollerRef}>
						<SubjectGrid num={Array.isArray(subjects) ? subjects.length : 1}>
							
							{Array.isArray(subjects) && subjects.map( (sub, key) => 
								<SubjectWrapper onDrag={()=>setDragSub({sub, key})} scrollerRef={scrollerRef} key={key} subRef={subjectsIds[key]} nick={sub.nick} color={sub.color} onClick={()=>open(sub, subjectsRef.doc(subjectsIds[key]))}/>
								)
							}
							
							<Subject nick='+' new color='#e5e5e5' onClick={()=>{ subjectsRef.add( {color:getRandomColor()} ).then( docRef => docRef.get().then( docSnap => open(docSnap.data(), docRef)))}}/>
						</SubjectGrid>
					</HideScrollBar>
				</div>
			</SubjectsContainer>
		</>//
	)
}

const Subjects = props => <FirebaseAuthConsumer><SubjectsComponent {...props}/></FirebaseAuthConsumer>//

const SubjectsContainer = styled.div`
	background:#fff;
	padding:40px 30px;
	border-radius:30px;
	height:calc(11.5vw + 18.3vh);
	width:320px;
	position:relative;
	margin:25px;
	
	flex-shrink:0;
	
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
	
	h4 {
		margin-bottom:15px;
		margin-top:-20px;
	}
	
	.gridScrollerContainer {
		height:96%;
	}
	
	.closeButton{
		margin-top:calc(-28px - 15px);
		text-align:right;
		cursor:pointer;
	}
`

const SubjectGrid = styled.div`
	display:grid;
	gap:10px;
	grip-gap:10px;
	grid-template-columns: repeat(3, 100px);
	grid-template-rows: repeat(${props=>Math.floor(props.num/3 + 2)}, 62.5px);
`

export {Subject, Subjects}