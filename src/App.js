import React, {Component, Suspense} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'

import UsersContainer from './components/Users/UsersContainer';
import {Route, BrowserRouter, withRouter, Redirect} from 'react-router-dom';
import LoginPage from "./components/Login/Login";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from './components/Profile/ProfileContainer'
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./components/redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import Video from "./components/Video/Video";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component{
	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		console.log('Error occured', promiseRejectionEvent)
}
	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}

	render() {
		if(!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className = "app-wrapper">
				<HeaderContainer />
				<Nav />
				<div className = "app-wrapper-content">
					<Route exact path ='/' render = {() => <Redirect to={'/profile'} />} />
					<Suspense fallback={'Loading'} >
						<Route path ='/profile/:userId?' render = {() => <ProfileContainer />} />
						<Route path ='/dialogs' render = {() => <DialogsContainer />} />
					</Suspense>
					<Route path ='/video' render = {() => <Video />}/>
					<Route path ='/music' component = {""}/>
					<Route path ='/settings' component = {""}/>
					<Route path ='/users' render = {() => <UsersContainer />} />
					<Route path = '/login' render = {() => <LoginPage /> } />

				</div>
			</div>
		);
}

}
const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);
