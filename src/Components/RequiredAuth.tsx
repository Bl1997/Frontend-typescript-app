import { Navigate, useLocation } from "react-router-dom";
import { idText } from "typescript";
import { store, useAppSelector } from "../Redux/store";

export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector((store) => store.AuthReducer.isAuth);
  const Location=useLocation()
  console.log(Location.pathname)

  if (!isAuth) {
    return <Navigate to="/login" replace state={{data:Location.pathname}} />;
  }
  return children;
};
