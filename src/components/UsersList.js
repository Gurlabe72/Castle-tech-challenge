import React, { Component } from "react";
import UserData from "../data/users.json";
class UsersList extends Component {
  render() {
    return (
      <div>
        <h1> Hey Joe! </h1>
        {UserData.map((userDetail, index) => {
          return (
            <div>
              <h1>{userDetail.id}</h1>
              <p>
                <ul>
                  <li>{userDetail.name}</li>
                  <li>{userDetail.email_md5}</li>
                  <li>{userDetail.last_location.ip}</li>
                  <li>{userDetail.last_location.location}</li>
                </ul>
              </p>
            </div>
          );
        })}
        }{" "}
      </div>
    );
  }
}

export default UsersList;
