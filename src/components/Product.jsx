import React from "react";
import Button from "./Button";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function product({ title, description, price, image }) {
  return (
    <div className="product">
      <div>
        <div className="image-holder">
          <img src={image} alt={title} />
        </div>
        <div>
          <h3 className="prod-title">{title}</h3>
          <p className="prod-description">{description}</p>
        </div>
        <div>
          <div className="rating">
            <BsStarFill color="#ffe234" />
            <BsStarFill color="#ffe234" />
            <BsStarFill color="#ffe234" />
            <BsStarFill color="#ffe234" />
            <BsStarHalf color="#ffe234" />
          </div>
          <span className="price">£{price}</span>
        </div>
      </div>
      <Button />
    </div>
  );
}

export default product;
