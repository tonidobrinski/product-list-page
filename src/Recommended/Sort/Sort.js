import React from "react";
import "./Sort.css";

function Sort({ onChangeSort }) {
  return (
    <div>
      <label htmlFor="sortDropdown" className="sort">
        Sort by:
      </label>
      <select id="sortDropdown" className="form-select" onChange={onChangeSort}>
        <option value="alphabetical-az">Alphabetical A-Z</option>
        <option value="alphabetical-za">Alphabetical Z-A</option>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
      </select>
    </div>
  );
}

export default Sort;
