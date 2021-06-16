import React, { Component } from "react";
import PropTypes from "prop-types";

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
      </nav>
    );
  }
}

export default NavBar;

// create the class components using the snippet rce
