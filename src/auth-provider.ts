import { User } from './types/a';
const localStorgeKey = "__auth_provider_token__"
export const getToken = () =>window.localStorage.getItem(localStorgeKey)
export const handleUserResponse = ({user}:{user:User}) =>{
  window.localStorage.setItem(localStorgeKey,user.token || "")
  return user
}
export const login = (data :{username:string,password:string}) =>{
  return fetch("").then(
    async(response:Response) =>{
      if(response.ok){
        return handleUserResponse(await response.json())
      }else{
        return Promise.reject(data)
      }
    }
  )
}
export const register = (data :{username:string,password:string}) =>{
  return fetch("").then(
    async(response:Response) =>{
      if(response.ok){
        return handleUserResponse(await response.json())
      }
      else{
        return Promise.reject(data)
      }
    }
  )
}
export const logout = async() =>window.localStorage.removeItem(localStorgeKey)

