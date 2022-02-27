import React from 'react'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

import {getRandomColor} from '../utils/color'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE.apiKey,
	authDomain: process.env.REACT_APP_FIREBASE.authDomain,
	databaseURL: process.env.REACT_APP_FIREBASE.databaseURL,
	projectId: process.env.REACT_APP_FIREBASE.projectId,
	storageBucket: process.env.REACT_APP_FIREBASE.storageBucket,
	messagingSenderId: process.env.REACT_APP_FIREBASE.messagingSenderId,
	appId: process.env.REACT_APP_FIREBASE.appId,
	measurementId: process.env.REACT_APP_FIREBASE.measurementId
};

const error=(msg, err)=>{
	console.error(err)
	alert("Error "+msg+'\nLook in console for details')
}

const login = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/classroom.courses.readonly')
	return firebase.auth().signInWithPopup(provider).then(result=>{
		
		const token = result.credential.accessToken;
		
		const user = result.user;
		
		const isNew = result.additionalUserInfo.isNewUser
		
// 		console.log(token, user, isNew)
		
		//if (isNew){
		
		/*
		userDb.collection('schedule').add({
			start,
			end,
			subject
		})
		userDb.collection('sessions').add({
			start:new Date(2020, 10, 1, 10, 10).getTime(),
			end:new Date(2020, 10, 1, 11, 5).getTime(),
			link:'',
			subject:''
		})*/
		
		if (isNew && window.confirm("Importare corsi da Classroom?"))
			fetch('https://classroom.googleapis.com/v1/courses', {
				method: 'GET',
				headers: {
					'Authorization': 'Bearer '+token,
					'Accept': 'application/json',
				}
			}).then(res=>{
				
				if (res.status < 400)
					res.json().then(response=>{
// 						console.log(response)
						
						const db = firebase.firestore();
						
						const userDb = db.collection("users").doc(user.uid)
						
						//should use a db.batch but too lazy
						
						response.courses.filter(course=>course.courseState==="ACTIVE").forEach(({id, name, alternateLink, calendarId})=>{
							//classroom api does not return meet link & color yet
							
							//section often undefined
							
							userDb.collection('subjects').doc(id).set({
								name:name,
								nick:name,
								course:alternateLink,
								color:getRandomColor(),
								conference:'',
								whiteboard:'',
								calendar:calendarId,
							}).catch(err=>error("writing classroom data to server", err))
						})
						
					}).catch(err=>error("reading classroom response", err))
			}).catch(err=>error("getting classroom data", err))
		//}
		
		return result
	})
}

const logout = () => {
	firebase.auth().signOut();
}

export default function FirebaseProvider (props) {
	
	return (
	<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
		<FirestoreProvider firebase={firebase} {...firebaseConfig}>
			{
				props.children
			}
		</FirestoreProvider>
	</FirebaseAuthProvider>
	)
}

export {login, logout}