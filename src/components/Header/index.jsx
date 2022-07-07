import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { useSelector } from "react-redux";

const Header = () => {
  let count = useSelector((state) => state.cartList.count);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2><Link to={`/`}>
          TestShop</Link></h2>
      </div>
      <div className="icon_cart">
        <Link to={`/cart`}>
          <i class="fa fa-cart-plus" aria-hidden="true">
            <b className="count">{count}</b>
          </i>
        </Link>
      </div>
    </div>
  )
}

export default Header;