import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import { Alert } from "./layout/Alert";
import { About } from "./components/pages/About";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);

    this.setState({ users: res.data, loading: false });
  }

  // Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // set Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type },
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <NavBar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
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

//$ npm i react-router-dom
