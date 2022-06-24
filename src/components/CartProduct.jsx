import React from "react";
import breadImg from "../images/butter.png";

function CartProduct() {
  return (
    <div className="cart-product">
      <div className="image-holder">
        <img src={breadImg} alt="Butter" />
      </div>
      <div>
        <h3 className="prod-title">Butter</h3>
        <div>
          <h4>quantity</h4>
          <div>
            <button className="sign minus">-</button>
            <span className="quantity">2</span>
            <button className="sign plus">+</button>
          </div>
        </div>
      </div>
      <div className="price">
        <del className="discount">£1.00</del>
        <span>£1.60</span>
      </div>
    </div>
  );
}

export default CartProduct;
