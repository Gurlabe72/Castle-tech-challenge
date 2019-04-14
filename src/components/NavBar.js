import React, { Component } from "react";
import { Menu, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class NavBar extends Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Router>
          <Menu pointing>
            <Link to="/SafeList" primary size="huge" inverted color="orange">
              <Menu.Item
                name="Safe"
                active={activeItem === "safe"}
                onClick={this.handleItemClick}
              />{" "}
            </Link>{" "}
            <Link
              to="/SuspiciousList"
              primary
              size="huge"
              inverted
              color="orange"
            >
              <Menu.Item
                name="Suspicious"
                active={activeItem === "Suspicious"}
                onClick={this.handleItemClick}
              />{" "}
            </Link>{" "}
            <Link
              to="/MaliciousList"
              primary
              size="huge"
              inverted
              color="orange"
            >
              <Menu.Item
                name="Malicious"
                active={activeItem === "Malicious"}
                onClick={this.handleItemClick}
              />{" "}
            </Link>{" "}
          </Menu>{" "}
        </Router>{" "}
        <Table textAlign="center" compact={true}>
          <Table.Header>
            <Table.Row fluid>
              <Table.HeaderCell> Evidence Rating </Table.HeaderCell>{" "}
              <Table.HeaderCell> ID </Table.HeaderCell>{" "}
              <Table.HeaderCell> NAME </Table.HeaderCell>{" "}
              <Table.HeaderCell> HASHED EMAIL </Table.HeaderCell>{" "}
              <Table.HeaderCell> LAST LOCATION </Table.HeaderCell>{" "}
            </Table.Row>{" "}
          </Table.Header>{" "}
        </Table>{" "}
      </div>
    );
  }
}
