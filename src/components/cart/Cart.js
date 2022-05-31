function Cart(props) {
  const products = props.cart.map((item) => <div> {item.title} </div>);
  return <section> {products} </section>;
}
export default Cart;
