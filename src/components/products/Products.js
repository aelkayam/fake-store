import Product from "../product/Product";
import "../product/Product.css";

function Products(props) {
  const products = props.products.map((item) => (
    <Product
      title={item.title}
      price={item.price}
      description={item.description}
      src={item.image}
    />
  ));
  return <section className="products"> {products} </section>;
}

export default Products;
