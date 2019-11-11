import React from 'react';
import axios from 'axios';

class AllPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/post/post_list").then(response => {
            this.setState({posts: response.data});
        });
    }

    render() {
        return (
            <div className={"section"}>
                {this.state.posts.map(post => (
                    <div className={"box"} key={post.id}>
                        <div className="content">
                            <h2> {post.title} </h2>
                            <p>{post.body}</p>
                            <p>{post.created_at}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default AllPost;