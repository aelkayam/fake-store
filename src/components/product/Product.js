import "./Product.css";

function Product(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.src} alt={props.description} />
      </div>
      <div className="product-info">
        <h5>{props.title}</h5>
        <h6>price: {props.price}</h6>
      </div>
    </div>
  );
}

export default Product;
