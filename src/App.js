import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Idris";

function App() {
  return (
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "20px"
    }}>
      <div style={{ padding: "20px" }}>
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Body>
            <Card.Title><Name /></Card.Title>
            <Card.Text><Price />
            <div style={{
              backgroundColor: "red", 
              color: "white", 
              padding: "5px", 
              fontSize: "14px", 
              display: "inline-block", 
              borderRadius: "5px",
              marginTop: "5px"
            }}>
              Limited-Time Sale! -10%
            </div>
            </Card.Text>
            <Card.Text><Description /></Card.Text>
            <Image />
            <button style={{
              backgroundColor: "#ff4500", 
              color: "#fff", 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer",
              margin: "1px 29%"
            }}>
              Buy Now
            </button>
          </Card.Body>
          <div style={{
            marginTop: "20px", 
            fontStyle: "italic", 
            color: "#555", 
            textAlign: "center"
          }}>
            "These boots are super stylish and unbelievably comfortable!" - Random expert.
          </div>
        </Card>
        {/* Greeting */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p>{firstName ? `Hello, ${firstName}! Check out these boots.` : "Hello, there!"}</p>
          {firstName && <img src="https://i.pinimg.com/474x/98/d7/da/98d7da4d352d0617e95083d8044d62c0.jpg" alt="Profile Placeholder" />}
        </div>
      </div>
    </div>
  );
}

export default App;
