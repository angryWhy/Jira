import { paramType } from "../types/a"
export const isFasly = (value :number)=>{
    return value===0?true:!!value
}
type obj = Record<string,unknown>
export const cleanObejct = <T extends obj,K extends keyof T>(object: T) => {
    const result = Object.assign({}, object)
    Object.keys(object).forEach(
        (key)=>{
            const keyvalue = key as K
            const value = object[keyvalue] 
            if(isFasly(value as number|number)){
                delete result[keyvalue]
            }
        }
    )
    return result
}