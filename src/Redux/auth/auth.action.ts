import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./auth.type"

export const UserLoginRequest=()=>{
    return {type:USER_LOGIN_REQUEST}
}
export const UserLoginSuccess=()=>{
    return {type:USER_LOGIN_SUCCESS}
}
export const UserLoginError=()=>{
    return {type:USER_LOGIN_ERROR}
}