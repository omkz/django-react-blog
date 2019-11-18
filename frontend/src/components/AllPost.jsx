import React from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import Blog from "../images/blog.png";


class AllPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/post/public").then(response => {
            this.setState({posts: response.data});
        });
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className={"section"}>
                        {this.state.posts.map(post => (
                            <div className={"box"} key={post.id}>
                                <article className="media">
                                    <figure className="media-left">
                                        <p className="image is-128x128">
                                            <img src={Blog}/>
                                        </p>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <div className="media-content">
                                                <p className="title is-4">{post.title}</p>
                                                <p className="subtitle is-6">@{post.author} , {post.created_at}</p>
                                            </div>
                                            <p>
                                                {post.body}
                                            </p>

                                            <Link to={"/post/" + post.id + "/public_detail"}
                                                  className="button is-primary">Read More..</Link>
                                        </div>

                                    </div>

                                </article>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        )
    }
}

export default withRouter(AllPost);