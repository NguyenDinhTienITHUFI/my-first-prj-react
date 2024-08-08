import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
export default function LoginComponent(){

    const[username,setUserName]=useState('tienvua')

    const[password,setPassword]=useState('')
    
   
    const[showErrorMessage,setShowErrorMessage]=useState(false)
    const navigate=useNavigate();

    const authContext=useAuth()

    function handelUserNameChange(event){
        
        setUserName(event.target.value)
    }
    function handelPasswordChange(event){
        
        setPassword(event.target.value)
    }
    function handeleSubmit(){
        if(authContext.login(username,password)){
           
            navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true)
           
        }
       
    }

   

    // function SuccessMessageComponent(){
    //     if(showSuccessMessage)
    //     {
    //         return (<div className='successMessage'>Authenticated Successfully</div>)
    //     }
    //     return null
    // }
    // function ErrorMessageComponent(){
    //     if(showErrorMessage){
    //         return( <div className='errorMessage'>Authenticated Failed</div>)
    //     }
    //     return null
    // }
    return(
        <div className="Login">
            <h1>Login</h1>
            
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed</div>}
           {/* <SuccessMessageComponent/>
           <ErrorMessageComponent/> */}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handelUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handelPasswordChange}/>
                </div>
                <div>
                    <button type="button"name="login" onClick={handeleSubmit}>Login</button>
                </div>
            </div>
            
        </div>
    )
}