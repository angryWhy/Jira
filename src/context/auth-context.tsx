import React, { ReactNode, useContext, useState } from "react";
import { User } from '../types/a';
import * as auth from "../auth-provider"

const AuthContext = React.createContext<{
    user:User | null,
    register:(form:User) =>Promise<void>,
    login:(form:User) =>Promise<void>,
    logout:() =>Promise<void> 
} | undefined
//undefined初始值
>(undefined)
AuthContext.displayName = "AuthContext"


export const AuthProvider = ({children}:{ children:ReactNode }) =>{
    const [user, setUser] = useState<User|null>(null)
    //login,user类型User|undefined，undefined是因为对结果只执行了if判断
    //削参？？？
    const login = (form :User) =>auth.login(form).then(setUser) 
    const register = (form :User)=>auth.register(form).then(setUser) 
    const logout = ()=>auth.logout().then(()=>setUser(null))
    return <AuthContext.Provider value={{user,login,register,logout}} children={children}/>
}

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("必须在Provider中使用");
    }
}