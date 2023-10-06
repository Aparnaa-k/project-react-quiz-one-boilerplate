import React, { Component } from 'react';
import "./QuizComponent.css";
import { Link } from 'react-router-dom';

export default class QuizComponent extends Component {
  render() {
    return (
      <div id="body">
        <div className="main">
          <h2>Questions</h2>
          <p id="number">1 of 15</p>
          <p className="question">What is the kalvium?</p>
          <div id="options">
            <button className="button">1</button>
            <button className="button">2</button>
          </div>
          <div id="options">
            <button className="button">3</button>
            <button className="button">4</button>
          </div>
          <div id="footer">
              <button id="previous">Previous</button>
              <button id="next">Next</button>
              <button id="quit" onClick={alert}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
