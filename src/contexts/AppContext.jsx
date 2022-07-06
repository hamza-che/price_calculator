import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "./Reducers";

// Reducer initial state
const initialState = {
  cart: [],
};

// Create App context
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [ cartState, dispatch ] = useReducer(cartReducer, initialState);
  const [ breadPrice, setBreadPrice ] = useState(0);
  const [ milkPrice, setMilkPrice ] = useState(0);
  const [ subtotal, setSubtotal ] = useState(0);
  const [ totalDiscount, setTotalDiscount ] = useState(0);
  const [ total, setTotal ] = useState(0);

  // Calc Milk Offer
  function calcMilkPrice(qty, groupQty, indivPrice, groupPrice) {
    const groupCount = Math.floor(qty / groupQty);
    const indivCount = qty % groupQty;
    return groupCount * groupPrice + indivCount * indivPrice;
  }

  // Apply Offers
  useLayoutEffect(
    () => {
      const butter = cartState.cart.find(item => item.title === "Butter");

      cartState.cart.map(item => {
        if (item.title === "Fresh Swiss milk") {
          const milkQty = item.quantity;
          const groupQty = 4;
          const indivPrice = item.price;
          const groupPrice = item.price * groupQty - item.price;

          const newPricing = calcMilkPrice(
            milkQty,
            groupQty,
            indivPrice,
            groupPrice
          );
          setMilkPrice(newPricing);
        } else if (item.title === "Whole french bread") {
          let newPricing;
          if (butter?.quantity >= 2) {
            newPricing = item.price * item.quantity - 0.5;
          } else {
            newPricing = item.price * item.quantity;
          }
          setBreadPrice(newPricing);
        }
      });
    },
    [ cartState ]
  );

  // Calc Subtotal
  useEffect(
    () => {
      const totalPrice = cartState.cart.reduce((acc, cur) => {
        return cur.price * cur.quantity + acc;
      }, 0);
      setSubtotal(totalPrice);
    },
    [ cartState ]
  );

  // Calc Total
  useEffect(
    () => {
      const nonDiscountProdsTotal = cartState.cart
        .filter(prod => !prod.hasDiscount)
        .reduce((acc, cur) => cur.price * cur.quantity + acc, 0);
      setTotal(nonDiscountProdsTotal + breadPrice + milkPrice);
    },
    [ subtotal ]
  );

  // Calc Discount
  useEffect(() => {
    setTotalDiscount(subtotal - total);
  }, [subtotal, total])

  return (
    <AppContext.Provider
      value={{
        cartState,
        dispatch,
        breadPrice,
        milkPrice,
        subtotal,
        totalDiscount,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function appState() {
  return useContext(AppContext);
}

export { AppContextProvider, appState };
