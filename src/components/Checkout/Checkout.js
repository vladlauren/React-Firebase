import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import Button from "../forms/Button/Button";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});
const checkout = ({}) => {
  const { cartItems } = useSelector(mapState);
  return (
    <div>
      <p>Checkout</p>
      <table>
        <tbody>
          <tr>
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </tbody>
            </table>
          </tr>
          <tr>
            <table>
              <tbody>
                {cartItems.map((item, pos) => {
                  console.log(item.produtName + "AICI");
                  return (
                    <tr key={pos}>
                      <td>{item.produtName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </tr>
          <tr>
            <table>
              <tr>
                <td>
                  <h3>TOTAL:</h3>
                </td>
              </tr>
            </table>
          </tr>
          <tr>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Button>Continue Shoping</Button>
                  </td>
                  <td>
                    <Button>CHECKOUT</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default checkout;
