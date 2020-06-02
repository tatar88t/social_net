import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
const App = (props) => {

	


  return (
	
      	<div className = "app-wrapper">
			<BrowserRouter>
				<Header />
      	  		<Nav />
      	  		<div className = "app-wrapper-content">
      	  		  	<Route path ='/profile' render = {() => <Profile posts = {props.posts} />}/>
      	  		  	<Route path ='/dialogs' render = {() => <Dialogs  data = {props.data} messages = {props.messages}/>}/>
					<Route path ='/news' component = {""}/>
					<Route path ='/music' component = {""}/>
					<Route path ='/settings' component = {""}/>
      	  		</div> 
			</BrowserRouter>
      	  	
      	</div>
   
    

    
  );
}





export default App;
