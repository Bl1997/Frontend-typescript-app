import axios,{ AxiosResponse } from "axios"
import { Product } from "../../utils/type"

export const getProductAPI=async(GetProductsParams:{params:{category:string[]}})=>{
    try {
        let response:AxiosResponse <Product[]>= await axios.get("  http://localhost:8080/products",GetProductsParams)
        return response.data
        
    } catch (error) {
        console.error("api error")
    }

}