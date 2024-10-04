import {  createContext, useState } from "react";

const userContext=createContext({})


export const UserContextProvider=({children})=>{
    const loginstatus=sessionStorage.getItem('isLogin') || false 
    const [isLogin,setIsLogin]=useState(loginstatus)
    console.log(isLogin);
    return (
        <userContext.Provider value={{isLogin,setIsLogin}} >
            {children}
        </userContext.Provider>
    )
}

export default userContext

