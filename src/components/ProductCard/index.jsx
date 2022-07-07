import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProductCard = () => {
  const product = useSelector((state) => state.allProducts.products);
  const renderList = product.length !== 0 && product.products.map((product) => {
    const { id, rating, title, images, price, category, description, stock, discountPercentage } = product;

    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <p className="stock">
                {`stock: ${stock}`}
              </p>
              <div className="image">
                <img src={images[0]} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="description">{description}</div>
                <div className="meta price">
                <small><del class="text-danger">$ {price} </del></small>
                 $ {Math.round(((100 - discountPercentage) / 100) * price)}
                </div>
                <div className="detail">
                  <div className="category">{category}</div>
                  <div className="rating">    
                    <span className="fa fa-star checked"/> {` ${rating}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return <>
    {renderList}
  </>
}

export default ProductCard;