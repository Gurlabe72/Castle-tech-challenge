import React, { Component } from "react";
import { Table, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserData from "../data/users.json";
import MapContainer from "../Maps/MapContainer";
import NavBar from "../components/NavBar";

const safeFilter = UserData.filter(userDetail => userDetail.risk <= 0.6);
const styles = {
  header: {
    background: "rgba(0, 0, 0, 0.5)",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

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
        {safeFilter.map((userDetail, index) => {
          return (
            <div>
              <Table
                styles={styles}
                key={index}
                compact={true}
                attached={true}
                celled
                padded
              >
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
