function Price({ milkPrice, breadPrice, totalPrice, title }) {
  return (
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
  );
}

export default Price;
