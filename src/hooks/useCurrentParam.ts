import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/app/app.action";
import { useAppSelector } from "../Redux/store";
import { Product } from "../utils/type";

export const useCurrentParam = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useAppSelector((store) => store.AppReducer.data);
  const [currentProduct,setCurrentProduct]=useState<Product>()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (productId) {
      const pdt= products.find(item => item.id === Number(productId));
      setCurrentProduct(pdt)
    }
  }, [productId, products]);
  return {currentProduct,id:productId}
};
