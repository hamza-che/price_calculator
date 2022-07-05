import { appState } from "../../contexts/AppContext";

function Total() {
  const { subtotal, totalDiscount, total } = appState();
  return (
    <div className="total">
      <div>
        <h4>Subtotal</h4>
        <span>£{subtotal.toFixed(2)}</span>
      </div>
      <div>
        <h4>Discount</h4>
        <span>£{totalDiscount.toFixed(2)}</span>
      </div>
      <div>
        <h4>Total</h4>
        <span>£{total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Total;
