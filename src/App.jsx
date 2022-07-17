import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <main>
      <div className="container">
        <AppContextProvider>
          <Products />
          <Cart />
        </AppContextProvider>
      </div>
    </main>
  );
}

export default App;
