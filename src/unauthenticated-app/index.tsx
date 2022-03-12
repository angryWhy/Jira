import { useState } from "react";
import Login from "./login";
import Register from "./register";
export const UnAuthenticated = () =>{
    const [isRegister, setIsRegister] = useState(false)
    return (
        <div>
            {
                isRegister? <Register/> : <Login/>
            }
            <button onClick={e=>setIsRegister(!isRegister)}>切换登录</button>
        </div>
    )
}