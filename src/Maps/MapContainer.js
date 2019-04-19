import React, { Component, Fragment } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import UserData from "../data/users.json";

const safeFilterContainer = UserData.filter(
  userDetail => userDetail.risk <= 0.6
);

const mapStyles = {
  margin: "center",
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={3} style={mapStyles}>
          {safeFilterContainer.map((userDetail, index) => {
            return (
              <Marker
                position={{
                  lat: userDetail.last_location.location.lat,
                  lng: userDetail.last_location.location.lon
                }}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
