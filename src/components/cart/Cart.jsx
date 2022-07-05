import { BsCart3 } from "react-icons/bs";
import { appState } from "../../contexts/AppContext";
import CartProduct from "./CartProduct";
import Total from "./Total";

function Cart() {
  const { cartState: { cart } } = appState();
  return (
    <section className="cart">
      <h2>
        Cart <BsCart3 />
      </h2>
      {cart.map(product => {
        return <CartProduct product={product} key={product.id} />;
      })}
      <Total />
    </section>
  );
}

export default Cart;
