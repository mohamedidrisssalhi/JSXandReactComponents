import product from "./product";
function Image() {
  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <img
        src={product.imageUrl}
        alt={`An image of ${product.name}`}
        style={{
          width: "100%",
          border: "2px solid #ccc",
          borderRadius: "10px",
          transition: "transform 0.3s"
        }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        />
      <p style={{ fontSize: "0.9em", color: "#888", marginTop: "5px" }}>
       {product.name}. Check out this leather boot!
      </p>
    </div>
  );
}
export default Image;