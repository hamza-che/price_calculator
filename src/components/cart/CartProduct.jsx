import { appState } from "../../contexts/AppContext";
import Price from "./Price";

function CartProduct({ product }) {
  const { dispatch, milkPrice, breadPrice } = appState();
  const { title, totalPrice, image, quantity, id } = product;

  return (
    <div className="cart-product">
      <div className="image-holder">
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="prod-title">{title}</h3>
        <div>
          <h4>quantity</h4>
          <div>
            <button
              className="sign minus"
              onClick={() =>
                dispatch({
                  type: "DECREMENT_QUANTITY",
                  payload: { id, product },
                })}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="sign plus"
              onClick={() =>
                dispatch({
                  type: "INCREMENT_QUANTITY",
                  payload: { id, product },
                })}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Price {...{ milkPrice, breadPrice, totalPrice, title }} />
    </div>
  );
}

export default CartProduct;
