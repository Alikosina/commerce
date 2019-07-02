import {
  FETCH_PRODSUCTS_SUCCESS,
  FETCH_PRODSUCTS_FAILED
} from "./productsActionsConst";
import { ProductItemModel } from "./models";

const initialState: ProductItemModel[] = [];

export default (
  state = initialState,
  { type, payload }: { type: String; payload: any }
) => {
  switch (type) {
    case FETCH_PRODSUCTS_SUCCESS:
      return payload;
  }
  return state;
};
