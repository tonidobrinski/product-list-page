import React from "react";
import { useState } from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <button
                className={`add-to-cart-button ${addedToCart ? "added" : ""}`}
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  "Added to Cart"
                ) : (
                  <>
                    <BsFillBagHeartFill className="bag-icon" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Card;
