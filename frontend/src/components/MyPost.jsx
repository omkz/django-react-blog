import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

    getPosts(){
        axios.get("http://127.0.0.1:8000/post.json",{
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
            axios.delete(`http://127.0.0.1:8000/post/${id}`)
                .then(res => {
                    this.getPosts();
                })
        }
    };

    render() {
        return (
            <div className={"section"}>
                {this.state.posts.map(post => (
                    <div className={"box"} key={post.id}>
                        <div className="content">
                            <div className="title"> {post.title} </div>
                            <p>{post.body}</p>
                            <p>{post.created_at}</p>
                        </div>
                        <footer className="card-footer">
                            <Link to={"/edit/"+post.id} className="card-footer-item">Edit</Link>
                            <a href="#" onClick={() => this.deletePost(post.id)} className="card-footer-item">Delete</a>
                        </footer>
                    </div>
                ))}
            </div>

        )
    }
}

export default MyPost;