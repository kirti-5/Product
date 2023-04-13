import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const add = () => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: uuidv4(), productName, quantity, category }),
    });
    navigate("/");
  };
  console.log("category", category);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="mb-4 mt-4">Add Products</h1>
          <form class="row gy-2 gx-3 align-items-center">
          <div className="mb-4">
              <label class="visually-hidden" for="productName" data-testid="productName">
                Product Name
              </label>
              <input
                type="text"
                class="form-control"
                id="autoSizingInput"
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label class="visually-hidden" for="quantity">
                Quantity
              </label>
              <input
                type="number"
                class="form-control"
                id="autoSizingInput"
                placeholder="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label class="visually-hidden" for="category">
                Category
              </label>
              <select
                class="form-select"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>Category</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>

            <div className="mb-4">
              <button type="submit" class="btn btn-warning col-12" onClick={add} data-testid="submit-button">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

