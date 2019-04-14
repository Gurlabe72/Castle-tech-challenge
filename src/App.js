import React, { Component } from "react";

import UsersList from "../src/components/UsersList";
import MapContainer from "../src/components/MapContainer";
import NavBar from "../src/components/NavBar";

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
