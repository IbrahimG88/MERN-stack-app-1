import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
  //alternative to the usual props, you can use only one of the two ways  <Navbar title="...".../>
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;

// now make the class components into a functional component
