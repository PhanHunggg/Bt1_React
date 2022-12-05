import React, { Component } from "react";

export default class Items extends Component {
  render() {
    return (
      <div className="card">
        <img style={{height: "240px"}} className="card-img-top" src="https://picsum.photos/200" alt="" />
        <div className="card-body">
          <h4 className="card-title text-center">Fresh new layout</h4>
          <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
        </div>
        <div className="card-footer text-center">
            <button className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    );
  }
}
