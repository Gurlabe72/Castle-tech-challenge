import React, { Component } from "react";
import { Container, Table, Card, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";

class UsersList extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Container>
          <h1> CASTLE.IO </h1>{" "}
          {UserData.map((userDetail, index) => {
            return (
              <div>
                <Menu>
                  <Menu.Item
                    key={index}
                    color={(() => {
                      if (userDetail.risk <= 0.89) return "yellow";
                    })()}
                    fluid
                    raised
                    link
                    name="Suspicious"
                    active={activeItem === "Suspicious"}
                    onClick={this.handleItemClick}
                  >
                    Suspicious{" "}
                  </Menu.Item>
                  <Menu.Item
                    key={index}
                    color={(() => {
                      if (userDetail.risk >= 0.9) {
                        return "red";
                      }
                    })()}
                    fluid
                    raised
                    link
                    name="Malicious"
                    active={activeItem === "Malicious"}
                    onClick={this.handleItemClick}
                  >
                    Malicious{" "}
                  </Menu.Item>
                  <Menu.Item
                    key={index}
                    color={(() => {
                      if (userDetail.risk <= 0.6) {
                        return "green";
                      }
                    })()}
                    fluid
                    raised
                    link
                    name="Safe"
                    active={activeItem === "Safe"}
                    onClick={this.handleItemClick}
                  >
                    Safe{" "}
                  </Menu.Item>{" "}
                </Menu>{" "}
                <Table celled padded>
                  <Table.Header>
                    <Table.Row fluid>
                      <Table.HeaderCell singleLine>
                        {" "}
                        Evidence Rating{" "}
                      </Table.HeaderCell>{" "}
                      <Table.HeaderCell> ID </Table.HeaderCell>{" "}
                      <Table.HeaderCell> NAME </Table.HeaderCell>{" "}
                      <Table.HeaderCell> HASHED EMAIL </Table.HeaderCell>{" "}
                      <Table.HeaderCell> LAST LOCATION </Table.HeaderCell>{" "}
                    </Table.Row>{" "}
                  </Table.Header>{" "}
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Card
                          key={index}
                          color={(() => {
                            if (userDetail.risk <= 0.6) {
                              return "green";
                            } else if (userDetail.risk <= 0.89) return "yellow";
                            else return "red";
                          })()}
                          fluid
                          raised
                          link
                        >
                          <Card.Content header={userDetail.risk} />

                          <Card.Content extra />
                        </Card>{" "}
                      </Table.Cell>{" "}
                      <Table.Cell singleLine> {userDetail.id} </Table.Cell>{" "}
                      <Table.Cell> {userDetail.name} </Table.Cell>{" "}
                      <Table.Cell textAlign="right">
                        <br /> {userDetail.email_md5}{" "}
                      </Table.Cell>{" "}
                      <Table.Cell>
                        {" "}
                        {userDetail.last_location.ip}{" "}
                        <a href={userDetail.last_location.location}>
                          {" "}
                          Click here {userDetail.location}{" "}
                        </a>{" "}
                      </Table.Cell>{" "}
                    </Table.Row>{" "}
                  </Table.Body>{" "}
                </Table>{" "}
              </div>
            );
          })}{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default UsersList;
