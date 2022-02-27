import React from 'react'

import HomeStyle from './Home-styles'
import Background from '../components/background'
import Loading from '../components/Loading'

import { logout } from '../components/firebase'
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { FirestoreCollection } from "@react-firebase/firestore";

import ScheduleViewer from '../components/ScheduleViewer'
import {Subjects} from '../components/Subjects'
import HideScrollBar from '../components/HideScrollBar'

const HomePage = ({user, isNew, ...props}) => {
	
	const [editingSubjects, setEditingSubjects] = React.useState(isNew)
	const [editingSubject, setEditingSubject] = React.useState(false)
	const [dragSub, setDragSub] = React.useState()
	
	return (
		<HomeStyle openTabNum={editingSubject ? 3 : editingSubjects ? 2 : 1 }>
			<Background/>
			
			<h4 style={{textAlign:'left'}}>{user.displayName}</h4>
			<p>
				{user.email}
			</p>
			<div onClick={logout}>Logout</div>
			
			<div className='scrollerContainer centerContent'>
				<HideScrollBar direction='horizontal' className='scroller'>
					
					<div className='boxesContainer'>
					
						{editingSubjects &&
							<FirestoreCollection path={'/users/'+user.uid+'/subjects/'}>
								{ d => {
									return d.isLoading ? <Loading/> :
									
									<Subjects subjects={d.value} subjectsIds={d.ids} edit={(tf)=>setEditingSubject(tf)} setDragSub={setDragSub} selfClose={()=>{setEditingSubjects(false);setEditingSubject(false)}}/>
									
								}}
							</FirestoreCollection>
						}
						
						<FirestoreCollection path={'/users/'+user.uid+'/sessions/'}>
							{d => {
								return d.isLoading ? <Loading/> :
								
									<ScheduleViewer dragSub={dragSub} onDragEnter={(e)=>{console.log(e.dataTransfer.getData('text'))}} sessions={Array.isArray(d.value) ? d.value : []} edit={()=>{setEditingSubjects(!editingSubjects);setEditingSubject(false)}}/>
							}}
						</FirestoreCollection>
					
					</div>
					
				</HideScrollBar>
			</div>
			
		</HomeStyle>
	)//
}

const Home = props => <FirebaseAuthConsumer><HomePage {...props}/></FirebaseAuthConsumer>//

export default Home