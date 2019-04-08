import React, { Component } from "react";
import UsersList from "./components/UsersList";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import MalList from "../src/components/MalList";
import SusList from "../src/components/SusList";
import SafeList from "../src/components/SafeList";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />{" "}
        <Route exact strict path="/MalList" component={MalList} />{" "}
        <Route exact strict path="/SusList" component={SusList} />{" "}
        <Route exact strict path="/SafeList" component={SafeList} />{" "}
        <UsersList />
      </Router>
    );
  }
}

export default App;
