import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {authHeader} from "../helpers/auth-header";

class MyPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            user: {}
        };
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get("http://127.0.0.1:8000/post.json", {
            headers: authHeader()
        }).then(response => {
            this.setState({
                posts: response.data,
                user: JSON.parse(localStorage.getItem('user')),
            });
        });
    }

    deletePost(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete(`http://127.0.0.1:8000/post/${id}`, {
                headers: authHeader()
            }).then(res => {
                this.getPosts();
            })
        }
    };

    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className={"section"}>
                        {this.state.posts.map(post => (
                            <div className={"box"} key={post.id}>
                                <div className="content">
                                    <div className="title"> {post.title} </div>
                                    <div className="subtitle is-6">@{post.author} , {post.created_at}</div>
                                    <p>{post.body}</p>
                                </div>
                                <footer className="card-footer">
                                    <Link to={"/post/" + post.id + "/edit"} className="card-footer-item">Edit</Link>
                                    <Link to={"#"} onClick={() => this.deletePost(post.id)}
                                          className="card-footer-item">Delete</Link>
                                    <Link to={"/post/" + post.id + "/detail"} className="card-footer-item">Detail</Link>
                                </footer>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPost;