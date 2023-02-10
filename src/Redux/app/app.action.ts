import { Product } from "../../utils/type";
import { getProductAPI } from "./app.api";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
} from "./app.type";
import { AppDispatch } from "../store";

export interface IproductRequest {
  type: typeof PRODUCT_REQUEST;
}
export interface IproductError {
  type: typeof PRODUCT_ERROR;
}
export interface IGetproductSuccess {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: Product[];
}

export type AppAction = IproductRequest | IproductError | IGetproductSuccess;

export const ProductRequset = (): IproductRequest => {
  return { type: PRODUCT_REQUEST };
};

export const ProductError = (): IproductError => {
  return { type: PRODUCT_ERROR };
};
export const GetProductSuccess = (data: Product[]): IGetproductSuccess => {
  return { type: GET_PRODUCT_SUCCESS, payload: data };
};

export const getProducts =
  (GetProductsParams?: { params: { category: string[] } }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(ProductRequset());

    try {
      let data = await getProductAPI(GetProductsParams);

      if (data) {
        dispatch(GetProductSuccess(data));
      }
    } catch (error) {
      dispatch(ProductError());
    }
  };
