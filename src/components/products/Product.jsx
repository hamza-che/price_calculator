import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { appState } from "../../contexts/AppContext";

function Product({ product }) {
  const { dispatch, cartState: { cart } } = appState();
  const { title, image, price, description, id } = product;
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
      <button
        className="main-btn"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Product;
