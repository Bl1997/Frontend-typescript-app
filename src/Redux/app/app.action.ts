import { Product } from "../../utils/type"
import { getProductAPI } from "./app.api"
import { GET_PRODUCT_SUCCESS, PRODUCT_ERROR, PRODUCT_REQUEST } from "./app.Type"

export const ProductRequset=()=>{
    return{type:PRODUCT_REQUEST}

}
 
export const ProductError=()=>{
    return{type:PRODUCT_ERROR}

}
export const GetProductSuccess=(data:Product[])=>{
    return{type:GET_PRODUCT_SUCCESS,payload:data}

}

export const getProducts=()=>async(dispatch)=>{

    dispatch(ProductRequset())

try {
    let data= await getProductAPI()

    if(data){
        dispatch(GetProductSuccess(data))
    }
    
} catch (error) {
    dispatch(ProductError())
    
}


}