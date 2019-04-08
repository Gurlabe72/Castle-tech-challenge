import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import UsersList from "./components/UsersList";
import { Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 350,
            padding: "1em 0em"
          }}
          vertical
        >
          <InfoWindow onClose={this.onInfoWindowClose} />
          <UsersList />
        </Segment>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD6haIcyA1Hwk4nf_3MiQKJKthGM1Vk-sw"
})(App);
