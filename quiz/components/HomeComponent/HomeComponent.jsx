import React, { Component } from "react";
import "./HomeComponent.css";
import { Link } from "react-router-dom";


export default class HomeComponent extends Component {
  render() {
    return (
      <div className="body">
        <h1>Quiz App</h1>
        <Link to="/QuizComponent">
          <button className="play">Play</button>
        </Link>
      </div>
    );
  }
}
