import qs from "qs"

import * as auth from "../provider/auth-provider"
import { useAuth } from '../context/auth-context';

const Host = "http://localhost:3004"

interface Config extends RequestInit {
    token?:string,
    data?:object
}

export const http = async( endPoint:string,{data,token,...customConfig}:Config={}) =>{
    const config = {
        method:"GET",
        headers:{
            Authorization:token? `Bearer${token}` : ``,
            "Content-Type" : data ?"application/json" : ''
        },
        //传过来覆盖method：“GET”
        ...customConfig
    }

    if(config.method.toUpperCase() === "GET"){
        endPoint+=`?${qs.stringify(data)}` 
    }else{
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${Host}/${endPoint}`,config).then(async response=>{
        if(response.status === 401){
            //登出
            await auth.logout()
            //页面重新刷新
            window.location.reload()
            return Promise.reject({message:'请重新登陆'})
        }
        //取到结果
        const data = await response.json()
        if(response.ok){
            return data
        }else{
            return Promise.reject(data)
        }
    })
}
export const useHttp = ()=>{
    const { user } = useAuth()
    return (...[endpoint,config]:Parameters<typeof http>)=>http(endpoint,{...config,token:user?.token})

}