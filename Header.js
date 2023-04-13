import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "../addProduct/AddProduct";
import ProductList from "../productList/ProductList";

export default class NavbarComp extends Component {
  render() {
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
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/" element={<ProductList />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
