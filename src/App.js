import React, { Component } from "react";
import NavBar from "../src/components/NavBar";
import UsersList from "../src/components/UsersList";
import MapContainer from "../src/components/MapContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UsersList />
        <MapContainer />
      </div>
    );
  }
}
export default App;
