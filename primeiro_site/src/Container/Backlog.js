import React, { Component } from "react";
import BackForm from "../UI/BackForm";
export default class Backlog extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      backlog: [
        {
          id: 1,
          backname: "task 01",
          backdate: "01/01/2017"
        },
        {
          id: 2,
          backname: "task 02",
          backdate: "01/01/2018"
        },
        {
          id: 3,
          backname: "task 03",
          backdate: "01/01/2019"
        },
        {
          id: 4,
          backname: "task 04",
          backdate: "01/01/2020"
        }
      ]
    };
  }

  handleSubmit(e, { name, date }) {
    e.preventDefault();
    var state = this.state;
    var myback = {
      id: state.backlog.length + 1,
      backname: name,
      backdate: date
    };
    this.setState({ backlog: state.backlog.concat(myback) });
  }

  handleRemove(id) {
    console.log("Implement remove function here!");
    var myBack = this.state.backlog;
    myBack.splice(id, 1);
    this.setState({ backlog: myBack });
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "25px" }}>
        <BackForm submitHandler={this.handleSubmit} />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Task Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.backlog.map((backlog, index) => {
              const onClickRemove = e => {
                this.handleRemove(index);
              };
              return (
                <tr key={backlog.id}>
                  <th scope="row">{backlog.id}</th>
                  <td>{backlog.backname}</td>
                  <td>{backlog.backdate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={onClickRemove}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
