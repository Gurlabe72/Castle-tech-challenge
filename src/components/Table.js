import React, { Component } from "react";
import { Table, Card, Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";
import { MDBDataTable } from "mdbreact";

class TableData extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });
  render() {
    return <MDBDataTable striped bordered small data={UserData} />;
  }
}

export default TableData;
