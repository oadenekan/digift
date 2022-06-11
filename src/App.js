import React from 'react';
import logo from "./images/digift-logo.svg";
import icon from "./images/search-icon.svg";
import daynight from "./images/day-night.svg";
import sparkles from "./images/sparkles.svg";
import banner from "./images/banner.svg";
import "./App.css";
import CButton from "./shared/button";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <nav>
          <li className="nav-item">
            <img src={logo} alt="logo" />
          </li>
          <li className="nav-item">Personal > Business ></li>
          <li className="nav-item" className="search-wrapper">
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
            <img src={daynight} alt="day night icon" />
          </li>
          <li className="nav-item">Login</li>
          <li className="nav-item">
            <button>
              Get started <img src={sparkles} alt="get started icon" />
            </button>
          </li>
          <li>
            {/*<CButton className="button_nav">
            Get Started
            <img src={sparkles} alt="get started icon" />
            </CButton>*/}
          </li>
        </nav>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <section className="main-content">
        <img src={banner} alt="banner" />
      </section>
    </div>
    </React.Fragment>
  );
}

export default App;
