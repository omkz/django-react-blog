import React from 'react'
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
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
        axios.post('http://localhost:8000/rest-auth/login/', object)
            .then(res =>
                localStorage.setItem('user', JSON.stringify(res.data)))
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            username: '',
            password: ''
        })

        this.props.history.push('/mypost');
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
                                <input className="input" type="text" value={this.state.username}
                                       onChange={this.onChangeUsername}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" value={this.state.password}
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