import React from "react";
import axios from "axios";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete(id) {
        console.log("omekn")
        axios
            .delete(`http://127.0.0.1:8000/post/${this.props.post.id}/`)
            .then(window.location.reload());

    }

    render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {this.props.post.title}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p>{this.props.post.body}</p>
                        <p>{this.props.post.created_at}</p>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item"
                       onClick={() => this.handleDelete(this.props.post.id)}>Edit</a>
                    <a href="#" className="card-footer-item"
                       onClick={() => this.handleDelete(this.props.post.id)}>Delete</a>
                </footer>
            </div>
        );
    }
}

export default Post;