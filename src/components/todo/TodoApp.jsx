import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams } from 'react-router-dom'

export default function TodoApp(){
    return(
        <div className="TodoApp">
                <BrowserRouter>
                    <Routes>
                        <Route path='/'element={<LoginComponent/>}></Route>
                        <Route path='/login'element={<LoginComponent/>}></Route>
                        <Route path='/welcome/:username'element={<WelcomeComponent/>}></Route>
                        <Route path='*'element={<ErrorComponent/>}></Route>
                    </Routes>
                </BrowserRouter>
                
                

        </div>
    )
}

function LoginComponent(){

    const[username,setUserName]=useState('tienvua')

    const[password,setPassword]=useState('')
    
    const[showSuccessMessage,setShowSuccessMessage]=useState(false)
    const[showErrorMessage,setShowErrorMessage]=useState(false)
    const navigate=useNavigate();
    function handelUserNameChange(event){
        
        setUserName(event.target.value)
    }
    function handelPasswordChange(event){
        
        setPassword(event.target.value)
    }
    function handeleSubmit(){

        if(username==='tienvua'&&password==='admin'){
            console.log('success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else{
            console.log('failed')
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
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
            {showSuccessMessage &&<div className='successMessage'>Authenticated Successfully</div>}
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

function WelcomeComponent(){
    const {username}=useParams()
    console.log(username)
    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div >
                Welcome Component
            </div>
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className='ErrorComponent'>
            <h1>We are working really hard</h1>
            <div>Web not found 404</div>
        </div>
    )
}