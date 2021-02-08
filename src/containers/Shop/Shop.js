import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import classes from "./Shop.css";
import { useSelector } from "react-redux";
import Products from "../../components/Products/Products";
import { auth } from "../../firebase/utils";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
import thinking from "../../assets/images/Shop/man.png";

const mapState = (state) => ({
  totalNumberCartItems: selectCartItemsCount(state),
});

const Shop = (props) => {
  const { totalNumberCartItems } = useSelector(mapState);
  <div className={classes.ShopLeft}>
    <Link to="/Cart">Cosul MEU ({totalNumberCartItems})</Link>
  </div>;

  const { currentUser } = props;
  return (
    <div className={classes.Shop}>
      <Menu />
      <div className={classes.myDiv}></div>
      <div className={classes.Text}>
        <b>
          {" "}
          <i>Tot ce iti poti imagina se poate printa!</i>
        </b>
      </div>
      <div className={classes.Backgr}>
        <img src={thinking} />
      </div>
      <div className={classes.ShopRight}>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
