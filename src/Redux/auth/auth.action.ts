import { LoginData } from "../../utils/type";
import { AppDispatch } from "../store";
import { UserLoginAPI } from "./auth.api";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./auth.type";

export interface IUserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}
export interface IUserLoginError {
  type: typeof USER_LOGIN_ERROR;
}
export interface IUserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: string;
}

export type AuthAction =
  | IUserLoginError
  | IUserLoginRequest
  | IUserLoginSuccess;

export const UserLoginRequest = (): IUserLoginRequest => {
  return { type: USER_LOGIN_REQUEST };
};
export const UserLoginSuccess = (token: string): IUserLoginSuccess => {
  return { type: USER_LOGIN_SUCCESS, payload: token };
};
export const UserLoginError = (): IUserLoginError => {
  return { type: USER_LOGIN_ERROR };
};

export const UserLogin =
  (payload: LoginData):any => async (dispatch: AppDispatch) => {
    dispatch(UserLoginRequest());
    try {
      let data = await UserLoginAPI(payload);

      if (data) {
        dispatch(UserLoginSuccess(data));
      }
    } catch (error) {
      dispatch(UserLoginError());
    }
  };
