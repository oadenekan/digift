import React, { useState } from "react";
import "../App.css";
import Category from "./category";

const Sidebar = () => {
  const [category, setCategory] = useState('ecommerce');

  return (
    <React.Fragment>
      <div className="filter-box col-md-4">
        <div className="filter-reset">
          <strong className="reset-filter-content">Filters</strong>
          <strong className="reset reset-filter-content">Reset</strong>
        </div>
        <div>
          <strong>Categories</strong>
        </div>
        <Category label="Ecommerce" value="ecommerce" />
        <Category label="Popular" value="popular" />
        <Category
          label="Airtime &amp; Electricity"
          value="airtime-electricity"
        />
        <Category label="Gaming" value="gaming" />
        <Category label="Electronics" value="electronics" />
        <Category
          label="Clothes &amp; Fashion"
          value="fashion"
        />
        <Category
          label="Jewelry &amp; Watches"
          value="jewelry"
        />
        <Category
          label="Home and furnitures"
          value="home"
        />
        <Category
          label="Sports &amp; Entertainment"
          value="entertainment"
        />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
