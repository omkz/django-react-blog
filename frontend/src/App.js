import React from 'react';
import AllPost from "./components/AllPost";

class App extends React.Component {
  render() {
    return (
      <div className={"section"}>
        <div className="columns">
          <div className="column is-three-quarters"> <AllPost /></div>
          <div className="column"></div>
        </div>
      </div>
    )
  }
}

export default App;