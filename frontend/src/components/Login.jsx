import React from 'react'
import {authenticationService} from "../services/authentication.services";
import {toast} from "react-toastify";

class Login extends React.Component {
    constructor(props) {
        super(props);
        authenticationService.logout();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const object = {
            username: this.state.username,
            password: this.state.password,
        };
        authenticationService.login(object.username, object.password)
            .then(res => {
                this.props.history.push("/");
                toast.success("You're successfully logged in.");
            })
            .catch(function (error) {
                toast.error(JSON.stringify(error.response.data));
            });

    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="section columns">
                <div className="column is-half is-offset-one-quarter box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input className="input" type="text" value={username}
                                       onChange={this.onChangeUsername}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" value={password}
                                       onChange={this.onChangePassword}/>
                            </div>
                        </div>
                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login