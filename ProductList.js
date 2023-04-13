import React from "react";
import { useEffect, useState } from "react";
import Card from "../displayCard/DisplayCard";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [dataSize, setDataSize] = useState(0);

  useEffect(() => {
    const limit = 12;
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        if (showMore && data.length > limit) {
          data = data.slice(0, limit);
          setDataSize(data.length);
        } else {
            setShowMore(false);
            setDataSize(data.length);
        }
        setProduct(data);
      });
  }, [showMore]);

  const LoadMore = () => {
    setShowMore(false); 
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-12 mb-lg-0">
                <li className="nav-item">
                  <a href="/add" className="nav-link" aria-current="page">
                    <h1>Products: Add Product</h1>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <div className="container">
      <h1>Product List</h1>  
      <p style={{textAlign: "right"}}>Show item per page {dataSize}</p>
      <div className="row" style={{ paddingBottom: "4em" }}>
        {product.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            productName={item.productName}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
      {showMore ? <button type="btn btn-success" onClick={LoadMore}>Load More</button> : null}
    </div>
    </>
  );
}
