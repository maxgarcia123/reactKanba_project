import React from "react";

const Homecard = props => {
  return (
    <div className="col-12 col-sm-4 ">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.photo}
          className="card-img-top"
          style={{
            paddingTop: "3px",
            width: "180px",
            height: "180px",
            alignItems: "center",
            marginLeft: "50px",
            marginTop: "15px"
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button href="#" className="btn btn-primary" onClick={props.action}>
            {" "}
            {props.title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homecard;
