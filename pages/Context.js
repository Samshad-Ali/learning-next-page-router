import { createContext, useState } from "react";

export const FormContext = createContext({});

export default function ContextWrapper({children}){
    const [data,setData] = useState('hello ths is me');
    return(
        <FormContext.Provider
        value={{
            data,
            setData
        }}
        >
        {
            children
        }
        </FormContext.Provider>
    )
}