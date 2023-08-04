import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

function Colors({ onChangeColor }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={onChangeColor} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={onChangeColor}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={onChangeColor}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={onChangeColor}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleChange={onChangeColor}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={onChangeColor}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;
