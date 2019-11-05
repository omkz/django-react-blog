import React from 'react';
import AllPosts from "./components/AllPosts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/post.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    return (
      <div>
        <AllPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;