import React, { Component } from 'react'
import "./ResultComponent.css";

export default class ResultComponent extends Component {
  render() {
    return (
      <div className="full">
        <p className="header">Result</p>
        <div className="popup">
          <p className="comment">You need more practise !</p>
          <p className="score">Your Score is 30%</p>
          <div className="result">
            <div className="list">
              <p>Total number of questions</p>
              <p id="num">15</p>
            </div>
            <div className="list">
              <p>Number of attemped questions</p>
              <p id="num">9</p>
            </div>
            <div className="list">
              <p>Number of corrected answers</p>
              <p id="num">3</p>
            </div>
            <div className="list">
              <p>Number of wrong answer</p>
              <p id="num">6</p>
            </div>
          </div>
        </div>
        <div id="btn">
          <button id="play-again">
            <a
              href="/QuizComponent"
              style={{ textDecoration: "none", color: "white" }}
            >
              Play again
            </a>
          </button>
          <button id="homeBtn">
            <a
              href="/HomeComponent"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Back to Home
            </a>
          </button>
        </div>
      </div>
    );
  }
}