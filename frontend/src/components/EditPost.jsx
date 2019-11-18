import React from 'react'
import axios from 'axios';
import {authHeader} from "../helpers/auth-header";
import {toast} from "react-toastify";

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangePublic = this.onChangePublic.bind(this);


        this.state = {
            title: '',
            body: '',
            is_public: false,
            user: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/post/' + this.props.match.params.id, {
            headers: authHeader()
        }).then(response => {
            this.setState({
                title: response.data.title,
                body: response.data.body,
                is_public: response.data.is_public,
                user: JSON.parse(localStorage.getItem('user')),
            });
        }).catch(function (error) {
                toast.error(JSON.stringify(error.response.data));
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }


    onChangePublic(e) {
        this.setState({
            is_public: !this.state.is_public
        });
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            body: this.state.body,
            is_public: this.state.is_public
        };
        axios.put('http://localhost:8000/post/' + this.props.match.params.id + '/', obj, {
            headers: authHeader()
        }).then(res => {
            const {from} = {from: {pathname: "/post/" + res.data.id + "/detail"}} || this.props.history.push("/");
            this.props.history.push(from);
            toast.success("Post successfully updated");
        }).catch(function (error) {
            toast.error(JSON.stringify(error.response.data));
        })


    }

    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="section">
                        <form onSubmit={this.onSubmit} className={"box"}>
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={this.state.title}
                                        onChange={this.onChangeTitle}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Body</label>
                                <textarea className="textarea" value={this.state.body}
                                          onChange={this.onChangeBody}/>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" checked={this.state.is_public}
                                       onChange={this.onChangePublic}/>
                                Public (true if checked)
                            </label>

                            <div className="control">
                                <button className="button is-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default EditPost;