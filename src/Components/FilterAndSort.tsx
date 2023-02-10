import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import {useState,useEffect} from "react"
import { useSearchParams } from 'react-router-dom'
const FilterAndSort = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialfiltervalue=searchParams.getAll("filter")

const [filtervalue,setFiltervalue]=useState<string[]>(initialfiltervalue||[])


const handlefilterChange=(value:string[])=>{
    setFiltervalue(value)

}

 useEffect(()=>{
let params:{filter?:string[]}={}
if(filtervalue.length) params.filter=filtervalue

setSearchParams(params)

 },[filtervalue,setSearchParams])



console.log(filtervalue)

  return (
    <div>
        <Box p={6} width="250px">
            <Heading>Filter</Heading>
            <CheckboxGroup colorScheme={"green"}  value={filtervalue} onChange={handlefilterChange}>
            <Stack spacing={[1, 5]} direction={['column']} margin="5">
 
  <Checkbox size='md' defaultChecked value={"electronics"}>
    Electronics
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"jewelery"}>
 Jewelery
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"men's clothing"}>
   Mens' Clothing
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"women's clothing"}>
    Womens' Clothing
  </Checkbox>
</Stack>
</CheckboxGroup>

<Heading>Sort</Heading>
<RadioGroup >
      <Stack direction='column' margin={"5"}>
        <Radio value='1'>First</Radio>
        <Radio value='2'>Second</Radio>
        <Radio value='3'>Third</Radio>
      </Stack>
    </RadioGroup>
        </Box>
    </div>
  )
}

export default FilterAndSort