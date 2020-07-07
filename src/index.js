import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

    ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>    
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
