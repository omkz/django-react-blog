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
    Link
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" component={AllPost}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <PrivateRoute path="/createpost" component={CreatePost}/>
                    <PrivateRoute path="/mypost" component={MyPost}/>
                    <PrivateRoute path='/edit/:id' component={EditPost}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;