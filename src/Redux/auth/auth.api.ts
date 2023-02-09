import axios from "axios";
import { LoginData } from "../../utils/type";

export const UserLoginAPI=async(payload:LoginData)=>{

    try {
        let response= await axios.post("https://reqres.in/api/login",payload);
        return   response.data.token;
        
    } catch (error) {
        console.error("user api error",error)
        
    }


}