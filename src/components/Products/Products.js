import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../redux/Products/products.action";
import Product from "./Product/Product";
import classes from "./Products.css";
import img1 from "../../assets/images/Home/produs.png";
import data from "../../data";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductsResults = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);
  return (
    <div className={classes.Produse}>
      <h1>Produsele Noastre</h1>
      <div className={classes.Products}>
        {products.map((product) => {
          return <Product {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsResults;
