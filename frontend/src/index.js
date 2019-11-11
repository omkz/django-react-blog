import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
} from "react-router-dom";

const router = (
    <Router>
        <App/>
    </Router>
)

ReactDOM.render(
    router,
    document.getElementById('posts'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
