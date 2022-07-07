import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../redux/actions/productsActions";
import { countCart } from "../../redux/actions/cartActions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  let count = useSelector((state) => state.cartList.count);
  const { images, title, price, category, description } = product;

  const fetchProductsDetail = async () => {
    const response = await axios
      .get(`https://dummyjson.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    fetchProductsDetail();
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  const addToCart = async () => {
    // api checkout belum diintagrasi

    // const toCart = ({
    //   userId: 1,
    //   products: [
    //     {id: productId, quantity: 1}
    //   ]
    // })

    // const response = await axios
    //   .post(`https://dummyjson.com/carts/add`, toCart)
    //   .catch((err) => {
    //     console.log("Err: ", err);
    //   });
    dispatch(countCart(count + 1))
  }

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={images !== undefined && images[0]} alt={title} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <p className="ui teal tag label">$ {price}</p>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0" onClick={() => addToCart()}>
                <div className="visible"> Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;