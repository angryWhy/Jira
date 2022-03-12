import { useHttp} from "./http";
import { useEffect } from "react";
import { cleanObejct } from "./cleanObject";
import { PList } from "../types/a";
import { useAsync } from './useAsync';
export const useProject = (param :Partial<PList>) =>{
    const client = useHttp()
    const {run,isLoading,error,data} = useAsync()
    useEffect(() => {
      run(client("projects",{data:cleanObejct(param)}))
    }, [param])
    
}