import { paramType } from "../types/a"
export const isFasly = (value :number)=>{
    return value===0?false:!value
}
type obj = Record<string,unknown>
export const cleanObejct = <T extends obj,K extends keyof T>(object: T) => {
    const result = Object.assign({}, object)
    Object.keys(result).forEach(
        (key)=>{
            const keyvalue = key as K
            const value = result[keyvalue] 
            if(isFasly(value as number|number)){
                delete result[keyvalue]
            }
        }
    )
    return result
}