import React from "react";
import "./Products.css";
import Card from "../components/Card";

function Products({ result }) {
  return (
    <>
      <section className="card-container">
        {result.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        ))}
      </section>
    </>
  );
}

export default Products;
