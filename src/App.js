import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import {FirebaseAuthConsumer} from "@react-firebase/auth";

import './App.css';
import './fonts.css'

import Landing from './screens/Landing'
import Home from './screens/Home'

function Routing({isSignedIn, ...props}) {
	
	const [isNew, setIsNew] = React.useState(false)
	
	if (isSignedIn)
		return (
			<Router>
				<Route exact path='/'><Home isNew={isNew}/></Route>
				<Redirect to='/' />
			</Router>
		)
	
	return (
		<Router>
			<Route exact path='/'><Landing setIsNew={setIsNew}/></Route>
			<Redirect to='/' />
		</Router>
	)
}

const App = props => <FirebaseAuthConsumer><Routing {...props}/></FirebaseAuthConsumer>;

export default App
