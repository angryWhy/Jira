import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useUrlQueryParam = <T extends string>(keys: T[]) => {
    //T :{}
    const [searchParams, setSearchParams] = useSearchParams()
    return [
        useMemo(() => keys.reduce((prev: { [key in T]: string }, key: T) => {
            return { ...prev, [key]: searchParams.get(key) || "" }
        }, {} as { [key in T]: string }),[searchParams,keys]),
        setSearchParams
    ] as const
}