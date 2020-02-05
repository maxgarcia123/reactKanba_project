import React from "react";
import { Link } from "react-router";
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-info bg-dark"
        style={{ background: "100%" }}
      >
        >
        <Link to="/" className="navbar-brand">
          Kanban React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/Backlog" className="nav-link">
                Backlog <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ToDo" className="nav-link">
                To Do
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Done" className="nav-link">
                Done
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default NavBar;
