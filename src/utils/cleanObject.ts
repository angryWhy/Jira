import { useEffect, useState } from "react"
import { paramType } from '../types/a';

export const isFasly = (value: unknown) => {
    return value===undefined || value===null ||value===""
}
type obj = Record<string, unknown>
export const cleanObejct = <T extends obj, K extends keyof T>(object: T) => {
    const result = Object.assign({}, object)
    Object.keys(result).forEach(
        (key) => {
            const keyvalue = key as K
            const value = result[keyvalue]
            if (isFasly(value as number | number)) {
                delete result[keyvalue]
            }
        }
    )
    return result
}
// export const useDebounce = (callback:()=>void,delay:number) =>{
//     let timeout :any
//     return (...params:any)=>{
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout=setTimeout(()=>{
//             callback()
//         },delay)
//     }
// } 
export const useDebounce = (value: paramType, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return ()=>{
            clearTimeout(timeout)
        }
    }, [value, delay])
    return debounceValue
}
export const useArray =<T>(initArray : T[])=>{
    const [value, setValue] = useState(initArray)
    return{
        value,
        setValue,
        add:(item:T)=>{setValue([...value,item])},
        clean:()=>{setValue([])},
        remove:(index:number)=>{
            const result = [...value]
            result.splice(index,1)
            setValue(result)
        }
    }
}
