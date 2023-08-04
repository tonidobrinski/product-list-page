import React from "react";
import "./Category.css";

function Category({ onChangeCategory }) {
  return (
    <div>
      <div>
        <label htmlFor="category">
          <h2 className="sidebar-title">Category</h2>
        </label>
        <select
          id="category"
          name="category"
          className="form-select"
          onChange={onChangeCategory}
        >
          <option value="">All</option>
          <option value="sneakers">Sneakers</option>
          <option value="flats">Flats</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heels</option>
        </select>
      </div>
    </div>
  );
}

export default Category;
