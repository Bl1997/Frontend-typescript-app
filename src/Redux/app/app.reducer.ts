import { Product } from "../../utils/type";
import { AppAction } from "./app.action";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./app.type";

export interface Appstate {
  isLoading: boolean;
  isError: boolean;
  data: Product[];
}

const initalstate = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (
  state: Appstate = initalstate,
  action: AppAction
): Appstate => {
  const { type } = action;

  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload };
    }
    case PRODUCT_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: state.data.map((product)=>product.id===action.payload.id ? action.payload:product)
      };
    }

    default: {
      return state;
    }
  }
};
