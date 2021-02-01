import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductStart } from "../../redux/Products/products.action";
import FormSelect from "../../components/forms/FormSelect/FormSelect";
import FormInput from "../../components/forms/FormInput/FormInput";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import classes from "./Admin.css";
import Button from "../../components/forms/Button/Button";
import {
  fetchProductsStart,
  deleteProductStart,
} from "../../redux/Products/products.action";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});
const admin = (props) => {
  const { products } = useSelector(mapState);

  const dispatch = useDispatch();

  const [productCategory, setProductCategory] = useState("pla");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("0");
  const [productThumbnail, setProductThumbnail] = useState("");

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const resetForm = () => {
    setProductCategory("pla");
    setProductName("");
    setProductPrice(0);
    setProductThumbnail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
      })
    );
    resetForm();
  };
  return (
    <div className={classes.Admin}>
      <Menu />
      <h1>Admin</h1>
      <div className={classes.Formular}>
        <form onSubmit={handleSubmit}>
          <h2>Add new Product</h2>
          <FormSelect
            label="category"
            options={[
              {
                value: "pla",
                name: "pla",
              },
              {
                value: "abs",
                name: "abs",
              },
            ]}
            handleChange={(e) => setProductCategory(e.target.value)}
          />
          <FormInput
            label="Name"
            type="text"
            value={productName}
            handleChange={(e) => setProductName(e.target.value)}
          />
          <FormInput
            label="Main image URL"
            type="url"
            value={productThumbnail}
            handleChange={(e) => setProductThumbnail(e.target.value)}
          />
          <FormInput
            label="Price"
            type="number"
            value={productPrice}
            handleChange={(e) => setProductPrice(e.target.value)}
          />
          <Button type="submit">Add Products</Button>
        </form>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <table>
                <tbody>
                  {products.map((product, index) => {
                    const {
                      productName,
                      productThumbnail,
                      productPrice,
                      documentID,
                    } = product;
                    return (
                      <tr>
                        <td>
                          <img
                            style={{ width: "100px" }}
                            src={productThumbnail}
                            alt="IMAGINE"
                          />
                        </td>
                        <td>{productName}</td>
                        <td>{productPrice}</td>
                        <td>
                          <Button
                            onClick={() =>
                              dispatch(deleteProductStart(documentID))
                            }
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default admin;
