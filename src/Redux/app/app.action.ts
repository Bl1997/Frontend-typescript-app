import { Product } from "../../utils/type";
import { getProductAPI, updateProductAPI } from "./app.api";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
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

export type AppAction = IproductRequest | IproductError | IGetproductSuccess|IupdateProductSuccess;

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

export interface IupdateProductSuccess {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: Product;
}

const updateProductSuccess = (payload: Product): IupdateProductSuccess => {
  return { type: UPDATE_PRODUCT_SUCCESS, payload };
};

export const UpdateProduct =
  (id: number, payload: { title: string; price: number }):any =>
  async (dispatch:AppDispatch) => {
    dispatch(ProductRequset())
    try {
      let data=await updateProductAPI(id,payload)
      if(data){
        dispatch(updateProductSuccess(data))
      }
    } catch (error) {
      dispatch(ProductError())
      
    }
  };
