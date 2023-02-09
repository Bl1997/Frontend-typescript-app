import { AuthAction, UserLoginRequest } from "./auth.action";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./auth.type";

export interface Authstate {
  isLoding: boolean;
  isError: boolean;
  isAuth: boolean;
  token: string;
}

const init = {
  isLoding: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (
  state: Authstate = init,
  action: AuthAction
): Authstate => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN_REQUEST: {
      return { ...state, isLoding: true };
    }

    case USER_LOGIN_SUCCESS: {
      return { ...state, isLoding: false, isAuth: true, token: action.payload };
    }
    case USER_LOGIN_ERROR: {
      return { ...state, isLoding: false, isError: true };
    }

    default:
      return state;
  }
};
