import React from "react";
import "./App.css";

const Book = () => {
  return (
    <div className="book-card">
      <img
        src="book.jpg"
        alt="Book cover"
      />
      <h3>Title: Physics</h3>
      <h4>Price: ₹600</h4>
      <button>Add to Cart</button>
    </div>
  );
};

export default Book;
