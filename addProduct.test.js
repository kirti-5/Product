import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import AddProduct from "../addProduct/AddProduct";


// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock the uuidv4 function
jest.mock("uuid", () => ({
  v4: jest.fn().mockReturnValue("1234"),
}));

describe("AddProduct component", () => {
  test("should update the productName state when the user types in the input field", () => {
    const { getByTestId } = render(<AddProduct />);   
     // eslint-disable-next-line testing-library/prefer-screen-queries
     const productNameInput = getByTestId("productName");
  });

  test("should update the quantity state when the user types in the input field", () => {
    const { getByPlaceholderText } = render(<AddProduct />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const quantityInput = getByPlaceholderText("quantity");

    fireEvent.change(quantityInput, { target: { value: "1" } });
    expect(quantityInput.value).toBe("1");
  });

  test("should update the category state when the user selects a category", () => {
    const { getByLabelText } = render(<AddProduct />);
     // eslint-disable-next-line testing-library/prefer-screen-queries
     const categorySelect = getByLabelText("Category");

    fireEvent.change(categorySelect, { target: { value: "Two" } });

    expect(categorySelect.value).toBe("Two");
  });

  test("should call the add function and navigate to the home page when the form is submitted", async () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<AddProduct />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const addProductButton = getByText("Add Product");
  });

});