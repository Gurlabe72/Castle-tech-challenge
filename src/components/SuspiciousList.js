import React, { Component } from "react";
import { Table, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";
import NavBar from "./NavBar";
import MapContainer from "./MapContainer";

const susFilter = UserData.filter(userDetail => 0.6 > userDetail.risk <= 0.89);

class UsersList extends Component {
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
              <Table key={index} compact={true} attached={true} celled padded>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>
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
                        <Card.Content header={userDetail.risk} />{" "}
                      </Card>{" "}
                    </Table.Cell>{" "}
                    <Table.Cell width={2}> {userDetail.id} </Table.Cell>{" "}
                    <Table.Cell width={2}> {userDetail.name} </Table.Cell>{" "}
                    <Table.Cell width={2}> {userDetail.email_md5} </Table.Cell>{" "}
                    <Table.Cell width={2}>
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
        <MapContainer />
      </div>
    );
  }
}

export default UsersList;
