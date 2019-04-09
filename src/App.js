import React, { Component } from "react";
import UsersList from "./components/UsersList";
import MapContainer from "../src/components/MapContainer";
class App extends Component {
  render() {
    return (
      <div>
        <UsersList />
        <MapContainer />
      </div>
    );
  }
}
export default App;
