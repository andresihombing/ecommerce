import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from "axios";
import './style.css';

const CategoryList = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);

  const fetchProductsCategory = async (item) => {
    const response = await axios
      .get(`https://dummyjson.com/products/category/${item}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  }

  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  }
  
  return (
    <div className="container">
      <button type="button" className="btn btn-primary btn-xs" onClick={() => fetchProducts()}>All</button>
      {category.map((item) => (
        <>
        <button type="button" className="btn btn-primary btn-xs" onClick={() => fetchProductsCategory(item)}>{item}</button>
        </>
      ))}
    </div>
  )
}

export default CategoryList;