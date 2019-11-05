import React from "react";
import Post from "./Post";


const AllPosts = props => {
    var posts = props.posts.map(post => {
        return (
            <div className={"tes"} key={post.id}>
                <Post post={post}/> <br/>
            </div>
        );
    });

    return <div>{posts}</div>;
};

export default AllPosts;