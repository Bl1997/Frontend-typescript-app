import { Box, Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const FilterAndSort = () => {
  return (
    <div>
        <Box p={6}>
            <Heading>Filter</Heading>
            <CheckboxGroup colorScheme={"green"}>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
  <Checkbox size='sm' colorScheme='red'>
    Bags
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"electronics"}>
    Electronics
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"jwellery"}>
 Jwellery
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"Men's Clothing"}>
   Mens' Clothing
  </Checkbox>
  <Checkbox size='md' defaultChecked value={"women's clothing"}>
    Womens' Clothing
  </Checkbox>
</Stack>
</CheckboxGroup>
        </Box>
    </div>
  )
}

export default FilterAndSort