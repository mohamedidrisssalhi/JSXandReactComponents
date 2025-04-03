import product from "./product";
function Price() {
  return <h2 style={{ color: "green", fontWeight: "bold", fontSize: "1.2em" }}>
          {product.price}
        </h2>;
}
export default Price;