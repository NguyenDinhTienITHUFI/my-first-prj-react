import { createContext, useContext, useState } from "react";
import { excuteBasicAuthenticateService } from "../api/HelloWorldApiService";

export const AuthContext=createContext()

export const useAuth=()=>  useContext(AuthContext)

export default function AuthProvider({children}){
    
    const [isAuthenticated,setAuthenticated]=useState(false)
    const [username,setUsername]=useState(null)
    //setInterval(()=>setNumber(number+1),10000)
    //const valueToBeShared={number,isAuthenticated,setAuthenticated}

    // function login(username,password){
    //     if(username==='tienvua'&&password==='admin'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
            
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //          return false
    //     }
    // }
    function login(username,password){
        const baToken='Basic '+ window.btoa(username + ":" + password)
            

        excuteBasicAuthenticateService(baToken)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
        setAuthenticated(false)
        // if(username==='tienvua'&&password==='admin'){
        //     setAuthenticated(true)
        //     setUsername(username)
        //     return true
            
        // }
        // else{
        //     setAuthenticated(false)
        //     setUsername(null)
        //      return false
        // }
    }
    function logout(){
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,username}}>
            {children}
        </AuthContext.Provider>

    )
}