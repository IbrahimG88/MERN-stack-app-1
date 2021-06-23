import "./App.css";
import React, { Component } from "react";
import NavBar from "./layout/NavBar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
        <Users />
      </div>
    );
  }
}

export default App;
