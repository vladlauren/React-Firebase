import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  setProducts,
  fetchProductsStart,
  deleteProductStart,
  fetchProductStart,
  setProduct,
} from "./products.action";
import { auth } from "./../../firebase/utils";
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProducts,
  handleFetchProduct,
} from "./products.helpers";
import productsTypes from "./products.types";

export function* addProduct({
  payload: { productCategory, productName, productThumbnail, productPrice },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUId: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (err) {}
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (err) {}
}
export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCTS_START, addProduct);
}
export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProducts(payload);
    yield put(fetchProductsStart());
  } catch (err) {}
}
export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(setProduct(product));
  } catch (err) {}
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}
export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}
