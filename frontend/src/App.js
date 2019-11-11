import React from 'react';
import AllPost from "./components/AllPost";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./components/CreatePost";
import MyPost from "./components/MyPost";
import EditPost from "./components/EditPost";
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {getCurrentUser} from "./helpers/auth";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false
        }
        this.loadCurrentUser = this.loadCurrentUser.bind(this);
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }


    componentDidMount() {
        this.loadCurrentUser();
    }

    render() {
        return (
            <div>
                <Header isAuthenticated={this.state.isAuthenticated}
                        currentUser={this.state.currentUser}
                />

                <Switch>
                    <Route exact path="/" component={AllPost}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <PrivateRoute authenticated={this.state.isAuthenticated} path="/createpost" component={CreatePost}/>
                    <PrivateRoute authenticated={this.state.isAuthenticated} path="/mypost" component={MyPost}/>
                    <PrivateRoute authenticated={this.state.isAuthenticated} path='/edit/:id' component={EditPost}/>

                </Switch>
            </div>
        )
    }
}

export default withRouter(App);
;