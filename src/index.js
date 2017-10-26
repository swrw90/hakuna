import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes/index.js';

ReactDOM.render(
    <Router
        history={browserHistory} 
    routes = { Routes } /> ,
    document.getElementById('root'));