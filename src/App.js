import React, { useState } from "react";
import logo from "./images/digift-logo.svg";
import icon from "./images/search-icon.svg";
import daynight from "./images/day-night.svg";
import sparkles from "./images/sparkles.svg";
import banner from "./images/banner.svg";
import "./App.css";
import CustomCard from "./shared/CCard";
import arrow from "./images/arrow.svg";
import Sidebar from "./shared/sidebar";
import Testimony from "./shared/testimony";
import 'bootstrap/dist/css/bootstrap.min.css';
import banner2 from "./images/banner-2.svg";

function App() {
  const [count, setCount] = useState(6);
  return (
    <React.Fragment>
     <div className="container">
        <header className="App-header">
          <nav>
            <ul>
              <li className="nav-item">
                <img src={logo} alt="logo" />
              </li>
              <li className="nav-item">Personal > Business ></li>
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
        <section className="main-content">
          <img src={banner} alt="banner" />
        </section>
        <section className="latest-arrival">
          <h1>Latest Arrivals</h1>
        </section>
        <section className="card-col">
          <Sidebar />
          <div className="card-parent">
            {[...Array(count)].map((elementInArray, index) => (
              <div key={index} className="inner-card">
                <CustomCard />
              </div>
            ))}
          </div>
        </section>
        <button className="load-more-btn" onClick={() => setCount(count + 3)}>
          Load more products
          <img src={arrow} alt="arrow direction" />
        </button>
        <div className="inner-card testimonial-header">
          <p>"Hear what happy customers are saying about Digift"</p>
        </div>

        <div className="testimonial-card">
          <Testimony />
        </div>
        <section className="main-content">
          <img src={banner2} alt="banner-2" />
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
