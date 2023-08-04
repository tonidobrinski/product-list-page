import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ onChangePrice }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input onChange={onChangePrice} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={onChangePrice}
        value={[0, 50]}
        title="$0 - $50"
        name="test2"
      />
      <Input
        handleChange={onChangePrice}
        value={[50, 100]}
        title="$50 - $100"
        name="test2"
      />
      <Input
        handleChange={onChangePrice}
        value={[100, 150]}
        title="$100 - $150"
        name="test2"
      />
      <Input
        handleChange={onChangePrice}
        value={[150, 200]}
        title="Over $150"
        name="test2"
      />
    </div>
  );
}

export default Price;
