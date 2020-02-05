import React, { Component } from "react";
import NavBar from "./UI/NavBar";
import Home from "./Container/Home";
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />

        {this.props.children}
      </div>
    );
  }
}
export default App;
