export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1, totalPrice: action.payload.price },
        ],
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(
          prod =>
            prod.id === action.payload.id
              ? {
                  ...action.payload.product,
                  quantity: prod.quantity + 1,
                  totalPrice: prod.price * prod.quantity + prod.price,
                }
              : prod
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(
          prod =>
            prod.id === action.payload.id
              ? {
                  ...action.payload.product,
                  quantity:
                    prod.quantity > 1 ? prod.quantity - 1 : prod.quantity,
                  totalPrice: prod.price * prod.quantity - prod.price,
                }
              : prod
        ),
      };
    default:
      return state;
  }
};
