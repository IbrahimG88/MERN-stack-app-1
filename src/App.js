import "./App.css";
import React, { Component } from "react";
import NavBar from "./layout/NavBar";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
      </div>
    );
  }
}

export default App;
