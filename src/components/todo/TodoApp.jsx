import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link } from 'react-router-dom'
import LogoutComponent from'./LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComonenet'
import AuthProvider from './security/AuthContext'

export default function TodoApp(){
    return(
        <div className="TodoApp">
               <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                        <Routes>
                            <Route path='/'element={<LoginComponent/>}></Route>
                            <Route path='/login'element={<LoginComponent/>}></Route>
                            <Route path='/welcome/:username'element={<WelcomeComponent/>}></Route>
                            <Route path='/todos'element={<ListTodosComponent/>}></Route>
                            <Route path='/logout'element={<LogoutComponent/>}></Route>
                            <Route path='*'element={<ErrorComponent/>}></Route>
                        </Routes>
                        <FooterComponent></FooterComponent>
                    </BrowserRouter>
                </AuthProvider>
                

        </div>
    )
}










