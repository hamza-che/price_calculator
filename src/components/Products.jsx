import React from "react";
import Product from "./Product";
import productsData from "../data/productsData";

function products() {
  return (
    <section className="products">
      <h2>Products</h2>
      {productsData.map(product => {
        const { title, image, price, description, id } = product;
        return <Product {...{ title, description, price, image }} key={id} />;
      })}
    </section>
  );
}

export default products;
