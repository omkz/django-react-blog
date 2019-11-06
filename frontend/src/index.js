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


const router = (
    <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/mypost" className="navbar-item">My Post</Link>
                    <Link to="/createpost" className="navbar-item">Create Post</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/signup" className="button is-primary">Sign Up</Link>
                            <Link to="/login" className="button is-light">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/createpost" component={CreatePost}/>
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
