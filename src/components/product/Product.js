import { useContext } from "react";
import MyProducts from "../../contexts/MyProducts";

function Product(props) {
  const { addToCart } = useContext(MyProducts);

  return (
    <div className="product-card" key={props.key}>
      <div className="product-image">
        <img src={props.src} alt={props.description} />
      </div>
      <div className="product-info">
        <h5>{props.title}</h5>
        <h6>price: {props.price}</h6>
        <div>
          <button onClick={() => addToCart(props)}> Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
