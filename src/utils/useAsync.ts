import { useState } from "react"

interface State<D>{
    error :Error |null ,
    data :D |null,
    stat :"idle" |"loading" |"error" |"success"
}
const defaultInitstate :State<null> = {
    stat:"idle",
    error:null,
    data:null
}
export const  useAsync = <D>(initialState?:State<D>) =>{
    const [state,setState] = useState<State<D>>({
        ...defaultInitstate
    })
    const setData = (data:D)=>setState({
        data,
        error:null,
        stat:"success"
    })
    const setError = (error :Error) =>setState({
       error,
       stat:"error",
       data:null
    })
    const run = (promise:Promise<D>) =>{
        if(!promise || !promise.then){
            throw new Error("请传入state数据类型")
        }
        setState({
            ...state,
            stat:"loading"
        })
        return promise.then(data=>{
            setData(data)
            return data
        }).catch(
            error =>{
                setError(error)
                return error
            }
        )
    }
    return {
        isIdle : state.stat==="idle",
        isLoading:state.stat==="loading",
        iserror: state.stat="error",
        isSuccess :state.stat="success",
        run,
        setData,
        setError,
        ...state
    }
}
