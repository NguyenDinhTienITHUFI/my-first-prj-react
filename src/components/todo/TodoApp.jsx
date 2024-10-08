import { useState } from 'react'
import './TodoApp.css'
import { BrowserRouter,Routes,Route,useNavigate,useParams,Link, Navigate } from 'react-router-dom'
import LogoutComponent from'./LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComonenet'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './api/TodoComponent'
function AuthenticatedRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}
export default function TodoApp(){
    return(
        <div className="TodoApp">
               <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                        <Routes>
                            <Route path='/'element={<LoginComponent/>}></Route>
                            <Route path='/login'element={<LoginComponent/>}></Route>
                            <Route path='/welcome/:username'element={
                                <AuthenticatedRoute>
                                        <WelcomeComponent/>
                                </AuthenticatedRoute>
                                }></Route>
                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent /> 
                                </AuthenticatedRoute>
                            } />
                             <Route path='/todo/:id' element={
                                <AuthenticatedRoute>
                                    <TodoComponent /> 
                                </AuthenticatedRoute>
                            } />
                            <Route path='/logout'element={
                                <AuthenticatedRoute>
                                    <LogoutComponent/>
                                </AuthenticatedRoute>
                                
                                
                                }></Route>
                            <Route path='*'element={<ErrorComponent/>}></Route>
                        </Routes>
                        <FooterComponent></FooterComponent>
                    </BrowserRouter>
                </AuthProvider>
                

        </div>
    )
}










