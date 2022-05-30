import Product from "../product/Product";

function Cart(props) {
  const products = props.cart.map((item) => <Product title={item.title} />);

  return <section className="products"> {products} </section>;
}
export default Cart;
