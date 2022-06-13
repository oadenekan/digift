import React from "react";
import "../App.css";

const Sidebar = () => {
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
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Ecommerce</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Popular</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Airtime & Electricity</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Gaming</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Electronics</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Clothes & Fashion</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Jewelry & Watches</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Home and furnitures</label>
            </div>
            <div>
              <input type="checkbox" />
              <label for="ecommerce">Sports & Entertainment</label>
            </div>
          </div>
    </React.Fragment>
  );
};

export default Sidebar;
