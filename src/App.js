import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {

  return (
      	<div className = "app-wrapper">			
				<Header />
      	  		<Nav />
      	  		<div className = "app-wrapper-content">
						  <Route path ='/profile' render = {() => <Profile store = {props.store} />} />
						  <Route path ='/dialogs' render = {() => <Dialogs store = {props.store} />} />
					<Route path ='/news' component = {""}/>
					<Route path ='/music' component = {""}/>
					<Route path ='/settings' component = {""}/>
					<Route path ='/users' render = {() => <UsersContainer />} />
      	  		</div>  	
      	</div>    
  );
}

export default App;
