import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import MyPost from "./components/MyPost";
import EditPost from "./components/EditPost";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";


const router = (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/createpost" component={CreatePost}/>
            <Route path="/mypost" component={MyPost}/>
            <Route path='/edit/:id' component={ EditPost } />
        </Switch>

    </Router>
)

ReactDOM.render(
    router,
    document.getElementById('posts'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
