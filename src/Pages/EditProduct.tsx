import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, } from "react-router-dom";
import { useAppDispatch,  } from "../Redux/store";
import {  useState ,useEffect} from "react";

import { UpdateProduct } from "../Redux/app/app.action";
import { useCurrentParam } from "../hooks/useCurrentParam";

const EditProduct = () => {

  const {currentProduct,id}=useCurrentParam()

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const updateHandler = () => {
    if (title.length && price) {
      const payload = {
        title,
        price,
      };
      dispatch(UpdateProduct(Number(id), payload)).then(() => {
        navigate("/");
      });
    }
  };
  
  useEffect(()=>{
    if(currentProduct?.title && currentProduct?.price){
      setTitle(currentProduct?.title)
      setPrice(currentProduct?.price)
    }

  },[currentProduct])


  return (
    <Box textAlign={"center"}>
      <Heading>Edit Product</Heading>

      <Stack spacing={4} width="350px" margin={"auto"} textAlign="center">
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            type={"text"}
            placeholder="Edit Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Price</FormLabel>
          <Input
           
            placeholder="Edit Price"
            value={price}
            onChange={(e) => { setPrice(Number(e.target.value)) }}
            type="number"
          />
        </FormControl>
      </Stack>
      <br />
      <Button color={"white"} bgColor="teal" onClick={updateHandler}>
        Update Product
      </Button>
    </Box>
  );
};

export default EditProduct;
