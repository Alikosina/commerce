import {
  FETCH_PRODSUCTS_SUCCESS,
  FETCH_PRODSUCTS_FAILED,
  FETCH_PRODUCTS_LOADING
} from "./productsActionsConst";
import { ProductItemModel } from "./models";

const initialState: { isLoading: boolean; data: ProductItemModel[] } = {
  isLoading: false,
  data: []
};

export default (
  state = initialState,
  { type, payload }: { type: String; payload: any }
) => {
  switch (type) {
    case FETCH_PRODSUCTS_SUCCESS:
      return {
        isLoading: false,
        data: payload
      };
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
  }
  return state;
};
