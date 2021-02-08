import React from "react";
import classes from "./Product.css";
import { Link } from "react-router-dom";
import Button from "../../forms/Button/Button";
import { useDispatch } from "react-redux";
import { addProducts } from "../../../redux/Cart/cart.action";

const product = (product) => {
  const dispatch = useDispatch();
  const { productName, productPrice, productThumbnail, documentID } = product;

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProducts(product));
  };
  return (
    <div>
      <ul>
        <li className={classes.Li}>
          <div className={classes.Product}>
            <Link to={"/Products/" + documentID}>
              <img className={classes.Img} src={productThumbnail} />
            </Link>

            <div className={classes.Name}>
              <Link to={"/Products/" + documentID}>{productName}</Link>
            </div>
            <div className={classes.Brand}></div>
            <div className={classes.Price}> {productPrice} Ron</div>
            <div className={classes.Rating}>
              <Button onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default product;
