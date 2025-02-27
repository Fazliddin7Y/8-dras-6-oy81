import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data)) // 20 ta mahsulot
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cards-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p>{product.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
