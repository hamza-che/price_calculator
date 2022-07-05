import Product from "./Product";
import productsData from "../../data/productsData";

function Products() {
  return (
    <section className="products">
      <h2>Products</h2>
      {productsData.map(product => {
        return <Product product={product} key={product.id} />;
      })}
    </section>
  );
}

export default Products;
