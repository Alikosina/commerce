import {
  FETCH_PRODSUCTS_SUCCESS,
  FETCH_PRODSUCTS_FAILED
} from "./productsActionsConst";

const initialState: any[] = [];

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
