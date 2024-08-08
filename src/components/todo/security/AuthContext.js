import { createContext, useContext, useState } from "react";

export const AuthContext=createContext()

export const useAuth=()=>  useContext(AuthContext)

export default function AuthProvider({children}){
    
    const [isAuthenticated,setAuthenticated]=useState(false)
    //setInterval(()=>setNumber(number+1),10000)
    //const valueToBeShared={number,isAuthenticated,setAuthenticated}

    function login(username,password){
        if(username==='tienvua'&&password==='admin'){
            setAuthenticated(true)
            return true
            
        }
        else{
            setAuthenticated(false)
             return false
        }
    }
    function logout(){
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>

    )
}