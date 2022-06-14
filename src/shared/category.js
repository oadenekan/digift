import React, { useState } from "react";
import "../App.css";

const Category = ({ label, value }) => {
  const [inputValue, setInputValue] = useState("ecommerce");

  const checkBoxValue = e => {
    setInputValue(e.target.value);
  };
  return (
    <React.Fragment>
      <div>
      <input
        type="checkbox"
        onChange={checkBoxValue}
        value={value}
        checked={inputValue === value}
      />
      <label htmlFor={value}>{label}</label>
      </div>
    </React.Fragment>
  );
};

export default Category;
