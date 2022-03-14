import { useEffect, useRef } from 'react';
export const useDocumentTitle = (title:string,keepOnUmount:boolean = true) =>{
    let oldTitle = useRef(document.title).current
    useEffect(()=>{document.title=title},[title])
    useEffect(()=>{
        return()=>{
            if(!keepOnUmount){
                document.title=oldTitle
            }
        }
    },[])
}