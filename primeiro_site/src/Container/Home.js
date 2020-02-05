import React, { Component } from "react";
import Homecard from "../UI/Homecard";
import { hashHistory } from "react-router";
class Home extends Component {
  homecardsBacklog = {
    title: "Backlog",
    text: "Manage your backlog",
    action: () => hashHistory.push("/Backlog"),
    photo: require("../assets/backlog.png")
  };

  homeCardsTodo = {
    title: "Doing",
    text: "Manage tasks are you doing",
    action: () => hashHistory.push("/ToDo"),
    photo: require("../assets/ToDo.png")
  };

  homeCardsDone = {
    title: "Done",
    text: "Manage tasks have been done",
    action: () => hashHistory.push("/Done"),
    photo: require("../assets/done.png")
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <Homecard {...this.homecardsBacklog} />
          <Homecard {...this.homeCardsTodo} />

          <Homecard {...this.homeCardsDone} />
        </div>
      </div>
    );
  }
}
export default Home;
