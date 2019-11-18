import React from 'react'
import {authenticationService} from "../services/authentication.services";
import {toast} from "react-toastify";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        authenticationService.logout();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);

        this.state = {
            username: "",
            password1: "",
            password2: "",
            email:""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onChangePassword1(e) {
        this.setState({
            password1: e.target.value
        });
    }

    onChangePassword2(e) {
        this.setState({
            password2: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const object = {
            username: this.state.username,
            password1: this.state.password1,
            password2: this.state.password2

        };
        authenticationService.registration( object.username, object.password1, object.password2)
            .then(res => {
                this.props.history.push("/login");
                toast.success("You have successfully registered.");
            })
            .catch(function (error) {
                toast.error(JSON.stringify(error.response.data));
            });

    }

    render() {
        const {username, email, password1, password2} = this.state;
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
                                <input className="input" type="password" value={password1}
                                       onChange={this.onChangePassword1}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Confirmation Password</label>
                            <div className="control">
                                <input className="input" type="password" value={password2}
                                       onChange={this.onChangePassword2}/>
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

export default SignUp