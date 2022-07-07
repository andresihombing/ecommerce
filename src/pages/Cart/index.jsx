import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/actions/cartActions";
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  let list = useSelector((state) => state.cartList.cartList);
  const [ total, setTotal ] = useState(0)
  
  
  const handleClickQuantityMin = (item) => {
      var data = [...list]
      data.forEach(element => {
        element.products.forEach(e => {
          if (e.quantity !== 0 && e.id === item.id) {
            e.quantity = item.quantity - 1
          }
        })
      });

      updataCount(data)
      dispatch(setCart(data));
  }

  const handleClickQuantityPlus = (item) => {
    var data = [...list]
      data.forEach(element => {
        element.products.forEach(e => {
          if (e.id === item.id) {
            e.quantity = item.quantity + 1
          }
        })
      });

      updataCount(data)
      dispatch(setCart(data));
  }

  const handleDelete = (item) => {
    var data = [...list]
      data.forEach(element => {
        var test = element.products.filter((val) => {
          return val.id !== item.id
        })
        element.products = test
      });
      
      updataCount(data)
      dispatch(setCart(data));
  }

  const updataCount = (data) => {
    var total = 0;
    data.forEach(element => {
      element.products.forEach(e => {
        var priceFinal = Math.round(((100 - e.discountPercentage) / 100) * e.price * e.quantity);
        total += priceFinal;
      })
    });

    setTotal(total)
  } 

  const getAllCart = async () => {
    const response = await axios
      .get(`https://dummyjson.com/carts/user/5`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    updataCount(response.data.carts)  
    dispatch(setCart(response.data.carts));
  }

  useEffect(() => {
    getAllCart();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div className="ui grid container">
      <table className="table">
        <thead>
        <tr>
          <td>Product</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>action</td>
        </tr>
        </thead>
        <tbody>
          {list.length !== 0 && list[0].products.map((item) => (
            <tr>
            <th>{item.title}</th>
            <th>
              <button type="button" className="btn btn-primary btn-xs" onClick={() => handleClickQuantityMin(item)}>-</button>
                {item.quantity}
              <button type="button" className="btn btn-primary btn-xs" onClick={() => handleClickQuantityPlus(item)}>+</button>
            </th>
            <th>
              <del className="text-danger">$ {item.quantity * item.price}</del> $ {Math.round(((100 - item.discountPercentage) / 100) * item.price * item.quantity) }
            </th>
            <th>
              <button className="btn btn-danger btn-xs" onClick={() => handleDelete(item)}> <i class="fa fa-trash-o" /> Delete </button>
            </th>
          </tr>
          ))}

          <tr>
            <th>Total</th>
            <th></th>
            <th>$ {total}</th>
          </tr>
          
        </tbody>
      </table>

      <div className="container">
        <button type="button" className="btn btn-success btn-lg">Checkout</button>
      </div>
    </div>
  )
}

export default Cart;