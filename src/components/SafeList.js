import React, { Component } from "react";
import MapContainer from "./MapContainer";
import NavBar from "./NavBar";
import { Table, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";

class SafeList extends Component {
  state = {};

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });
  render() {
    return (
      <div>
        <NavBar />{" "}
        {UserData.map((userDetail, index) => {
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
                        <Card.Content header={userDetail.risk} />

                        <Card.Content extra />
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
export default SafeList;
