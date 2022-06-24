import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <main>
      <div className="container">
        <Products />
        <Cart />
      </div>
    </main>
  );
}

export default App;
