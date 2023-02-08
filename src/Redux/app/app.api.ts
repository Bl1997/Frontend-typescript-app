import axios,{ AxiosResponse } from "axios"
import { Product } from "../../utils/type"

export const getProductAPI=async()=>{
    try {
        let response:AxiosResponse <Product[]>= await axios.get("  http://localhost:8080/products")
        return response.data
        
    } catch (error) {
        console.error("api error")
    }

}