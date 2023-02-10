import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterAndSort from "../Components/FilterAndSort";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/app/app.action";

import { useAppDispatch, useAppSelector } from "../Redux/store";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const Location=useLocation()
  const [searchParams]=useSearchParams()

  const products = useAppSelector((sotre) => sotre.AppReducer.data);

  useEffect(() => {
    if (products.length === 0||Location) {
      const GetProductsParams={
        params:{
          category:searchParams.getAll('filter')
        }
      }
      dispatch(getProducts(GetProductsParams));
    }
  }, [Location.search]);

  console.log(products);

  return (
    <div>
      <Flex>
        <Box><FilterAndSort/></Box>
      <Flex flexWrap={"wrap"} justifyContent="center">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </Flex>
      </Flex>
    </div>
  );
};

export default Homepage;
