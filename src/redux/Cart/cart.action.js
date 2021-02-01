import cartTypes from "./cart.types";

export const addProducts = (nextCartItem) => ({
  type: cartTypes.ADD_TO_CART,
  payload: nextCartItem,
});
