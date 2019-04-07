import React, { Component } from "react";
import UserData from "../data/users.json";
class UsersList extends Component {
  render() {
    return (
      <div>
        <h1> Hey Joe! </h1>
        {UserData.map((userDetail, index) => {
          return <h1>{userDetail.id}</h1>;
        })}
        }{" "}
      </div>
    );
  }
}

export default UsersList;
