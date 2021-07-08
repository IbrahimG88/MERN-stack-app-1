import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
    //alternative to the usual props, you can use only one of the two ways  <Navbar title="...".../>
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
