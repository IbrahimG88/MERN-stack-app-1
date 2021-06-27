import React from "react";
import UserItem from "./UserItem";
import Spinner from "../../layout/Spinner";
import PropTypes from "prop-types";

const Users = (props) => {
  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;

/*
first we were getting the data from this components state, we will change that
to get the data from the props from app.js and will substitute the this.state to this.props

        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}

                {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
*/
