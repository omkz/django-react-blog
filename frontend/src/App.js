import React from 'react';
import AllPost from "./components/AllPost";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./components/CreatePost";
import MyPost from "./components/MyPost";
import EditPost from "./components/EditPost";
import {
    Switch,
    Route,
    withRouter, Link
} from "react-router-dom";
import {authenticationService} from "./services/authentication.services";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailPost from "./components/DetailPost";
import DetailPostPublic from "./components/DetailPostPublic";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x =>
            this.setState({currentUser: x}
            ));
    }

    render() {
        const {currentUser} = this.state;
        let nav;
        if (currentUser) {
            nav = <nav className="navbar" role="navigation" aria-label="main navigation">
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
                                <Link to="/login" onClick={()=>toast.success("You're successfully logged out.")} className="button is-primary">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        } else {
            nav = <nav className="navbar" role="navigation" aria-label="main navigation">
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
        }

        return (
            <div>
                <ToastContainer autoClose={2000}/>
                {nav}
                <Switch>
                    <Route exact path="/" component={AllPost}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <PrivateRoute path="/createpost" component={CreatePost}/>
                    <PrivateRoute path="/mypost" component={MyPost}/>
                    <PrivateRoute path='/post/:id/edit' component={EditPost}/>
                    <PrivateRoute path='/post/:id/detail' component={DetailPost}/>
                    <Route path='/post/:id/public_detail' component={DetailPostPublic}/>
                </Switch>
            </div>
        )
    }
}

export default App;