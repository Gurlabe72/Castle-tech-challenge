import React, { Component } from "react";
import { Table, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";
import NavBar from "./NavBar";
import MapContainer from "./MapContainer";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
              <Router>
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
                            else return "yellow";
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
                      <Table.Cell width={2}>
                        {" "}
                        {userDetail.email_md5}{" "}
                      </Table.Cell>{" "}
                      <Table.Cell width={2}>
                        {" "}
                        {userDetail.last_location.ip}{" "}
                        <Link to="/SusData"> Click here </Link>{" "}
                      </Table.Cell>{" "}
                    </Table.Row>{" "}
                  </Table.Body>{" "}
                </Table>{" "}
              </Router>
            </div>
          );
        })}{" "}
        <MapContainer />
      </div>
    );
  }
}

export default UsersList;
