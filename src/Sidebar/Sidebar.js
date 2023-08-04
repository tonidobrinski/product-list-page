import React from "react";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

function Sidebar({ onChangePrice, onChangeColor }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Price onChangePrice={onChangePrice} />
        <Colors onChangeColor={onChangeColor} />
      </section>
    </>
  );
}

export default Sidebar;
