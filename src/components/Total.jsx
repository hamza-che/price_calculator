import React from "react";

function Total() {
  return (
    <div className="total">
      <div>
        <h4>Subtotal</h4>
        <span>£6.05</span>
      </div>
      <div>
        <h4>Discount</h4>
        <span>£0.5</span>
      </div>
      <div>
        <h4>Total</h4>
        <span>£6.00</span>
      </div>
    </div>
  );
}

export default Total;
