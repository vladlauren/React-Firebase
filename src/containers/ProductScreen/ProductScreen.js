import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "../../redux/Products/products.action";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import classes from "./ProductScreen.css";
import data from "../../data";
import { Link } from "react-router-dom";

const mapState = (state) => ({
  product: state.productsData.product,
});

const productScreen = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { productName } = product;
  console.log(productID);

  useEffect(() => {
    dispatch(fetchProductStart(productID));
  }, []);

  return (
    <div>
      <Menu />
      <div>
        <Link to="/Magazin">Back to results</Link>
      </div>
      <div className={classes.ProductDetails}>
        <div className={classes.Image}></div>
        <div className={classes.Details}>
          <ul>
            <li>
              <h4>{productName}</h4>
            </li>
            <li>
              Price: RON <b></b>
            </li>

            <li>
              Description:
              <div></div>
            </li>
          </ul>
        </div>
        <div className={classes.Action}>
          <ul>
            <li>Price: RON </li>
            <li>Status: </li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </li>
            <li>
              <button>Add to cart</button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default productScreen;
