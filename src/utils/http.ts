import qs from "qs"
import { useCallback } from "react"
import * as auth from "../auth-provider"
import { useAuth } from "../context/auth-context"
const api = `http://localhost:3004/`
//此接口扩展Requestinit，添加data，token类型
interface payload extends RequestInit{
    data:Record<string|number,unknown>,
    token?:string
}
export const http = async (endpoint : string ,{data,token,headers,...custionConfig}:payload) =>{
    const config = {
        method:"GET",
        headers:{
            Authorization:token?`bearer ${token}`:'',
            "Content-Type" : data ?"application/json" :""
        },
        ...custionConfig
    }
    if(config.method.toUpperCase()==="GET"){
        endpoint+=`?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data)
    }
    return window.fetch(`${api}${endpoint}`,{}).then(
        async (response:Response)=>{
            if(response.status === 401) {
                await auth.logout()
                window.location.reload()
                return Promise.reject({message:"重新登陆"})
            }
            const data =await response.json()
            if(response.ok){
                return data
            }else{
                return Promise.reject(data)
            }
        }
    )
}
export const useHttp = () => {
    const { user } = useAuth();
    // utility type 的用法：用泛型给它传入一个其他类型，然后utility type对这个类型进行某种操作
    return useCallback(
      (...[endpoint, config]: Parameters<typeof http>) =>
        http(endpoint, { ...config, token: user?.token }),
      [user?.token]
    );
  };