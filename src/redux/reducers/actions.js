import actionTypes from "./actionTypes";

export const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: products,
});
export const setIsFetching = (boolean) => ({
  type: actionTypes.SET_IS_FETCHING,
  payload: boolean,
});
export const setCartProduct = (products) => ({
  type: actionTypes.SET_ADD_CART_PRODUCTS,
  payload: products,
});
export const setProductsDetail = (productInfo) => ({
  type: actionTypes.SET_PRODUCTS_DETAILS,
  payload: productInfo,
});
export const setRemoveCartProduct = (productId) => ({
  type: actionTypes.SET_REMOVE_CART_PRODUCTS,
  payload: productId,
});
export const setClearCart = () => ({
  type: actionTypes.SET_CLEAR_CART,
});
export const setRemoveOneProduct = (product) => ({
  type: actionTypes.SET_REMOVE_ONE_PRODUCT,
  payload: product,
});
export const setList = () => ({
  type: actionTypes.SET_TO_LIST,
});
export const setGrid = () => ({
  type: actionTypes.SET_TO_GRID,
});