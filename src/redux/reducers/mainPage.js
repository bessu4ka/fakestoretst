import actionTypes from "./actionTypes";

const initialState = {
  products: [],
  isFetching: true,
  cartProducts: [],
  productsDetail: [],
  view: true
}

const mainPage = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isFetching: false
      };

    case actionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };

    case actionTypes.SET_PRODUCTS_DETAILS:
      return {
        ...state,
        productsDetail: action.payload
      };

    case actionTypes.SET_CLEAR_CART:
      return {
        ...state,
        cartProducts: []
      };

    case actionTypes.SET_ADD_CART_PRODUCTS:
      const previousValue = state.cartProducts.find(
        (p) => p.id === action.payload.id
      );
      return {
        ...state,
        cartProducts: previousValue
          ? state.cartProducts.map((c) =>
            c.id === action.payload.id
              ? { ...c, count: previousValue.count + 1 }
              : c
          )
          : [...state.cartProducts, { ...action.payload, count: 1 }]
      };

    case actionTypes.SET_REMOVE_CART_PRODUCTS:
      const updatedCount =
        state.cartProducts.find((p) => p.id === action.payload).count - 1;
      const updatedCartProducts = updatedCount
        ? state.cartProducts.map((prod) => {
          return prod.id === action.payload
            ? { ...prod, count: updatedCount }
            : prod;
        })
        : state.cartProducts.filter((prod) => {
          return prod.id !== action.payload;
        });
      return {
        ...state,
        cartProducts: updatedCartProducts
      };

    case actionTypes.SET_TO_LIST:
      return {
        ...state,
        view: true
      }

    case actionTypes.SET_TO_GRID:
      return {
        ...state,
        view: false
      }

    default:
      return state;
  }
};

export default mainPage;