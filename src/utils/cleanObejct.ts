const isFalsy = (value:any)=>{
    return value===0?false:!value
}
export const cleanObejct = (object:Record<string|number,unknown>)=>{
    const result = {...object}
    Object.keys(result).forEach(key=>{
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}