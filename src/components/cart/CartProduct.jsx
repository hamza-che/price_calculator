import { appState } from "../../contexts/AppContext";

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
      <div className="price">
        <del className="discount">
          {title === "Whole french bread" ? (
            totalPrice - breadPrice > 0 && `£${totalPrice.toFixed(2)}`
          ) : title === "Fresh Swiss milk" ? (
            totalPrice - milkPrice > 0 && `£${totalPrice.toFixed(2)}`
          ) : null}
        </del>
        <span>
          £{title === "Whole french bread" ? (
            breadPrice.toFixed(2)
          ) : title === "Fresh Swiss milk" ? (
            milkPrice.toFixed(2)
          ) : (
            totalPrice.toFixed(2)
          )}
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
