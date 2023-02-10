import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import {useEffect,useState} from "react"
import { getProducts } from '../Redux/app/app.action'

const EditProduct = () => {
const {productId}=useParams()
console.log(productId)
const dispatch=useAppDispatch()
const products=useAppSelector((store)=>store.AppReducer.data)
const [title,setTitle]=useState<string>('')
const [price,setPrice]=useState<number>(0)

useEffect(()=>{
  if(products.length===0){
    dispatch(getProducts())
  }

},[dispatch,products.length])


useEffect(()=>{

  if(productId){
    const currentProduct = products.find(item => item.id === Number(productId))
    console.log(currentProduct)
    currentProduct && setTitle(currentProduct.title)
    currentProduct && setPrice(currentProduct.price)
  }
},[productId,products])

// console.log(products)

// const handleChangeTitle=(e)=>{
//    setTitle(e.target.value)
// }
// const handleChangePrice=(e)=>{
//   setPrice(e.target.value)
// }


  return (
    <Box textAlign={"center"}>
      <Heading>Edit Product</Heading>
      
      <Stack spacing={4} width="350px" margin={"auto"} textAlign="center">
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input type={"text"} placeholder="Edit Title" value={title} onChange={()=>{}} />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input type={"number"}  placeholder="Edit Price" value={price} onChange={()=>{}} />
            </FormControl>
            </Stack><br />
            <Button color={"white"} bgColor="teal">Update Product</Button>
            </Box>
  )
}

export default EditProduct