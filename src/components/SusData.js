import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";
import NavBar from "./NavBar";
const susFilter = UserData.filter(userDetail => userDetail.risk > 0.06);

class UsersData extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });
  render() {
    return (
      <div>
        <NavBar />{" "}
        {susFilter.map((userDetail, index) => {
          return (
            <div>
              {userDetail.risk} {userDetail.name}
              {userDetail.email_md5} {userDetail.last_location.ip}{" "}
              {userDetail.last_location.country_code}
            </div>
          );
        })}{" "}
      </div>
    );
  }
}

export default UsersData;
