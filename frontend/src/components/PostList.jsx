import React from 'react';
import axios from 'axios';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/post.json").then(response => {
            this.setState({posts: response.data});
        });
    }

    deletePost(id) {
        axios.delete(`http://127.0.0.1:8000/post/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <p key={post.id}>{post.title}
                        <button onClick={() => this.deletePost(post.id)}>Delete</button>
                    </p>
                ))}
            </div>
        )
    }
}

export default PostList;