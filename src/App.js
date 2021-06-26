import "./App.css";
import React, { Component } from "react";
import NavBar from "./layout/NavBar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

//Used axios to get data from github api

/* simplest form of axious get request:
  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((res) => console.log(res.data));
  }
  //Same as:
   async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }
  // getting the data using axious and adding them to the state using setState:
   async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  */
