import { FETCH_PRODUCTS_LOADING } from "./productsActionsConst";

export const fetchProducts = () => (dispatch: any) => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
};
