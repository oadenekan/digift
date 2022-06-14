import React, { useState } from "react";
import "../App.css";

const Category = ({ label, value }) => {
  const [inputValue, setInputValue] = useState("ecommerce");

  const eatEba = e => {
    setInputValue(e.target.value);
    console.log(inputValue);
    console.log(value, 'val');
  };
  return (
    <React.Fragment>
      <input
        type="checkbox"
        onChange={eatEba}
        value={value}
        checked={inputValue === value}
      />
      <label for={value}>{label}</label>
    </React.Fragment>
  );
};

export default Category;
