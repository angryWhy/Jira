import React from "react";
import { ReactNode } from 'react';
type FallbackRender = (props :{error:Error |null}) =>React.ReactElement
//children:ReactNode
export class ErrorBoundary extends React.Component<React.PropsWithChildren<{fallback:FallbackRender}>,{error:Error | null}>{
    state = {
        error:null
    }
    static getDerivedStateFromError(error:Error){
        return{error}
    }
    render(){
        const {error} = this.state
        const {fallback,children} = this.props
        if(error){
            return fallback({error})
        }
        return children
    }
}