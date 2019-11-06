import React from 'react';
import PostList from "./components/PostList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div>
        <PostList />
      </div>
    )
  }
}

export default App;