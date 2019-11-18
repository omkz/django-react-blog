import React from 'react'
import axios from 'axios';
import {authHeader} from "../helpers/auth-header";
import {withRouter} from 'react-router-dom';
import {toast} from "react-toastify";

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangePublic = this.onChangePublic.bind(this);


        this.state = {
            title: '',
            body: '',
            is_public: false
        }
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
        const object = {
            title: this.state.title,
            body: this.state.body,
            is_public: this.state.is_public
        };
        axios.post('http://localhost:8000/post/', object, {
            headers: authHeader()
        }).then(res => {
            const {from} = {from: {pathname: "/post/" + res.data.id + "/detail"}} || this.props.history.push("/");
            this.props.history.push(from);
            toast.success("Post successfully created");
        }).catch(function (error) {
            toast.error(JSON.stringify(error.response.data));
        })

        this.setState({
            title: '',
            body: '',
            is_public: ''
        })

    }

    render() {
        return (
            <div className="section columns">
                <div className="column is-half is-offset-one-quarter box">
                    <form onSubmit={this.onSubmit}>
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
                            <textarea className="textarea" value={this.state.body} onChange={this.onChangeBody}/>
                        </div>

                        <label className="checkbox">
                            <input type="checkbox" value={this.state.is_public} onChange={this.onChangePublic}/>
                            Public (true if checked)
                        </label>

                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

export default CreatePost;