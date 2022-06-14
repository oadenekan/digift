import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/digift-logo.svg";
import icon from "./images/search-icon.svg";
import daynight from "./images/day-night.svg";
import sparkles from "./images/sparkles.svg";

function Business() {
  return (
    <React.Fragment>
      <div className="container">
        <header className="App-header">
          <nav>
            <ul>
              <li className="nav-item">
                <img src={logo} alt="logo" />
              </li>
              <li className="nav-item">
                <a href="#">Personal ></a>
              </li>
              <li className="nav-item">
                <a href="">Business ></a>
              </li>
              <li className="nav-item search-wrapper">
                <span>
                  <img src={icon} alt="search icon" />
                </span>
                <input
                  type="text"
                  placeholder="Find cards anywhere"
                  className="search-input"
                />
              </li>
              <li className="nav-item">
                <img
                  src={daynight}
                  alt="day night icon"
                  className="day-night"
                />
              </li>
              <li className="nav-item">Login</li>
              <li className="nav-item">
                <button>
                  Get started <img src={sparkles} alt="get started icon" />
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <section className="main-content" />
      </div>
    </React.Fragment>
  );
}

export default Business;
