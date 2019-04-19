import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SuspiciousList from "./components/SuspiciousList";
import MaliciousList from "./components/MaliciousList";
import SusData from "./components/SusData";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />{" "}
    <Route exact path="/SuspiciousList" component={SuspiciousList} />{" "}
    <Route exact path="/MaliciousList" component={MaliciousList} />{" "}
    <Route exact path="/SusData" component={SusData} />{" "}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
