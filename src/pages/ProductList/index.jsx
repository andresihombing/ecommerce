import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import { setCategory } from "../../redux/actions/productsActions";
import CategoryList from "../../components/CategoryList";
import axios from "axios";

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  }

  const fetchCategory = async () => {
    const response = await axios
      .get("https://dummyjson.com/products/categories")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCategory(response.data));
  }

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="ui grid container">
      <CategoryList />
      <ProductCard />
    </div>
  )
}

export default ProductList;