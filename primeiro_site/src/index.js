import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Backlog from "./Container/Backlog";
import ToDo from "./Container/ToDo";
import Done from "./Container/Done";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./App";
import Home from "./Container/Home";
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Backlog" component={Backlog} />
      <Route path="/ToDo" component={ToDo} />
      <Route path="/Done" component={Done} />
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
