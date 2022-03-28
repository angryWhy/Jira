import React, { ReactNode } from "react";
import { useState } from 'react';

import * as auth from "../provider/auth-provider"
import { User } from "../types/projectType";
import { http } from "../utils/useHttp";
import { useMount } from '../utils/useMount';


interface AuthForm {
    username: string,
    password: string
}
//localStorge里面找token，获得user
const bootstrapUser = async()=>{
    let user = null 
    const token = auth.getToken()
    if(token){
        const data = await http("why",{token})
        user = data.user
    }
    return user
}
//定义类型，Conetext
const AuthContext = React.createContext<{
    user: User | null;
    register: (form: AuthForm) => Promise<void>;
    login: (form: AuthForm) => void;
    logout: () => Promise<void>;
} | undefined>(undefined)
AuthContext.displayName = "AuthContext"
//组件当成children传递
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: AuthForm) => {
        console.log(form);
        //自定义的变动
        setUser({
            id: "1",
            name: "wzx",
            personId: "123",
            pin: true,
            organization: "a",
        })
        // return auth.login(form).then(user => setUser(user))
    }
    const register = (form: AuthForm) => {

        return auth.register(form).then(user => setUser(user))
    }
    const logout = () => {
        return auth.logout().then(() => setUser(null))
    }
    useMount(()=>{
        bootstrapUser().then(setUser)
    })
    return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}
export const useAuth = () => {
    //use使用context
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth必须在AuthProvider中使用");
    }
    return context;
}