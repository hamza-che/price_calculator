import React from "react";
import { BsCart3 } from "react-icons/bs";
import CartProduct from "./CartProduct";
import Total from "./Total";

function Cart() {
  return (
    <section className="cart">
      <h2>
        Cart <BsCart3 />
      </h2>
      <CartProduct />
      <Total />
    </section>
  );
}

export default Cart;
