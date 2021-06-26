import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

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
