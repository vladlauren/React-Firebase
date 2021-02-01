import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import classes from "./Shop.css";
import { useSelector } from "react-redux";
import Products from "../../components/Products/Products";
import { auth } from "../../firebase/utils";
import { Link } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";

const mapState = (state) => ({
  totalNumberCartItems: selectCartItemsCount(state),
});

const Shop = (props) => {
  const { totalNumberCartItems } = useSelector(mapState);

  const { currentUser } = props;
  return (
    <div className={classes.Shop}>
      <Menu />
      <div className={classes.Cos}>
        <Link to="/Cart">Cosul MEU ({totalNumberCartItems})</Link>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;
