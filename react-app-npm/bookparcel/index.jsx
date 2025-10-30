import ReactDom from "react-dom/client";
import React from "react";

function Book() {
  return (
    <div>
        <img src="" width="400" height="400"alt="book-image" />
        <h3>Tiltle: Physics</h3>
        <h4>Price: ₹381/-</h4>
        <button>Add To Cart</button>
    </div>
  )
}

const parent = document.getElementById("root");
const root = ReactDom.createRoot(parent);
root.render(<Book />);