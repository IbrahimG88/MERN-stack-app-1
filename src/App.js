import "./App.css";
import React, { Component } from "react";
import NavBar from "./layout/NavBar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
        <UserItem />
      </div>
    );
  }
}

export default App;
