import React, { useState, useEffect } from "react";
import logo from "./images/digift-logo.svg";
import icon from "./images/search-icon.svg";
import daynight from "./images/day-night.svg";
import sparkles from "./images/sparkles.svg";
import banner from "./images/banner.svg";
import "./App.css";
import CButton from "./shared/Button";
import giftcard from "./images/giftcard.svg";
import CustomCard from "./shared/CCard";
import arrow from "./images/arrow.svg";

function App() {
  const [msg, setMsg] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const moreCard = () => {
    console.log(showResults);
    setShowResults(wasOpened => !wasOpened);
    console.log(showResults);
    // <CustomCard />
  };

  // useEffect(() => {
  //   const moreCard = () => {
  //     setShowResults(true);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <div className="App">
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
              <li>
                {/*<CButton className="button_nav">
            Get Started
            <img src={sparkles} alt="get started icon" />
            </CButton>*/}
              </li>
            </ul>
          </nav>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        </header>
        <section className="main-content">
          <img src={banner} alt="banner" />
        </section>
        <section>
          <h1>Latest Arrivals</h1>
        </section>
        <section className="card-col">
          <div className="filter-box">
            <div className="filter-reset">
              <strong className="reset-filter-content">Filters</strong>
              <strong className="reset reset-filter-content">Reset</strong>
            </div>
            <div>
              <strong>Categories</strong>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Ecommerce</label>
             </div> 
            <div>
              <input type="checkbox" /><label for="ecommerce">Popular</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Airtime & Electricity</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Gaming</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Electronics</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Clothes & Fashion</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Jewelry & Watches</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Home and furnitures</label>
            </div>
            <div>
              <input type="checkbox" /><label for="ecommerce">Sports & Entertainment</label>
            </div>
          </div>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          {showResults && (
             <CustomCard />
          )}
        </section>
          <button className="load-more-btn">
            Load more products
            <img
              src={arrow}
              alt="arrow direction"
              onClick={() => {
                    setShowResults(!false);;
              }}
            />
          </button>
      </div>
    </React.Fragment>
  );
}

export default App;
