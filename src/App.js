import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Profile/ProfileContainer'
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import LoginPage from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

  return (
      	<div className = "app-wrapper">			
				<HeaderContainer />
      	  		<Nav />
      	  		<div className = "app-wrapper-content">
						  <Route path ='/profile/:userId?' render = {() => <ProfileContainer />} />
						  <Route path ='/dialogs' render = {() => <DialogsContainer />} />
					<Route path ='/news' component = {""}/>
					<Route path ='/music' component = {""}/>
					<Route path ='/settings' component = {""}/>
					<Route path ='/users' render = {() => <UsersContainer />} />
					<Route path = '/login' render = {() => <LoginPage /> } />

      	  		</div>  	
      	</div>    
  );
}

export default App;
