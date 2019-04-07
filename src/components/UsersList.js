import React, { Component } from "react";
import { Container, Header, Table, Rating } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";

class UsersList extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h1> Hey Joe! </h1>{" "}
          {UserData.map((userDetail, index) => {
            return (
              <div>
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine>
                        {" "}
                        Evidence Rating{" "}
                      </Table.HeaderCell>{" "}
                      <Table.HeaderCell> ID </Table.HeaderCell>{" "}
                      <Table.HeaderCell> NAME </Table.HeaderCell>{" "}
                      <Table.HeaderCell> HASHED EMAIL </Table.HeaderCell>{" "}
                      <Table.HeaderCell> LAST LOCATION </Table.HeaderCell>{" "}
                    </Table.Row>{" "}
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h2" textAlign="center">
                          {" "}
                          {userDetail.risk}{" "}
                        </Header>{" "}
                      </Table.Cell>{" "}
                      <Table.Cell singleLine> {userDetail.id} </Table.Cell>{" "}
                      <Table.Cell>
                        {userDetail.name}
                        {/* <Rating icon="star" defaultRating={3} maxRating={3} />{" "} */}
                      </Table.Cell>{" "}
                      <Table.Cell textAlign="right">
                        <br /> {userDetail.email_md5}{" "}
                      </Table.Cell>{" "}
                      <Table.Cell>
                        {userDetail.last_location.ip}
                        <a href="#"> 18 studies </a>{" "}
                      </Table.Cell>{" "}
                    </Table.Row>{" "}
                  </Table.Body>{" "}
                </Table>{" "}
              </div>
            );
          })}
          }{" "}
        </Container>{" "}
      </div>
    );
  }
}

export default UsersList;
