import React from "react";
import "./Recommended.css";
import Buttons from "../../components/Buttons";

function Recommended({ onChangeBrand }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons
            onClickHandler={onChangeBrand}
            value=""
            title="All Products"
          />
          <Buttons onClickHandler={onChangeBrand} value="Nike" title="Nike" />
          <Buttons
            onClickHandler={onChangeBrand}
            value="Adidas"
            title="Adidas"
          />
          <Buttons onClickHandler={onChangeBrand} value="Puma" title="Puma" />
          <Buttons onClickHandler={onChangeBrand} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
