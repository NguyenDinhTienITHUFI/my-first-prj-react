import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService";
import { Button } from "bootstrap";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent(){
    const today=new Date();
    const targetDate=new Date(today.getFullYear()+12, today.getMonth(),today.getDay())
    const [todos,setTodos]=useState([])
    const [message,setMessage]=useState(null)
    const authContext=useAuth()
    const username=authContext.username
    const navigate=useNavigate()
    useEffect( ()=> refreshTodos(),[])
    function refreshTodos(){
        retrieveAllTodosForUsername(username)
            .then(respone=>{
                
                setTodos(respone.data)
            })
            .catch(error=>console.log(error))
    }
    function deleteTodo(id){
        deleteTodoApi(username,id)
        .then(
            ()=>{
                setMessage('Delete of to do with id '+id +' successful')
                refreshTodos()
            }
                
        )
        .catch(error=>console.log(error))
    }
    function updateTodo(id){
        navigate(`/todo/${id}`)
    }
    function addnewTodo(){
        navigate('/todo/-1')
    }

    // const todos=[
    //     // {id:1, description:'Learn AWS',done:false, targetDate:targetDate},
    //     // {id:2, description:'Learn C#',done:false, targetDate:targetDate},
    //     // {id:4, description:'Learn Java',done:false, targetDate:targetDate},
    //     // {id:5, description:'Learn Devops',done:false, targetDate:targetDate},

    // ]
    return(
        <div className='container'>
            <h1>Things You Want To Do?</h1>
            {message&&<div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                           
                            <th>Description</th>
                            <th>Is done</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo=>(
                                <tr key={todo.id}>
                                    
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString( )}</td>
                                    <td><button className ="btn btn-warning" onClick={()=>deleteTodo(todo.id  )}>Delete</button></td>
                                    <td><button className ="btn btn-success" onClick={()=>updateTodo(todo.id  )}>Update</button></td>
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5"onClick={addnewTodo}>Add New Todo</div>
        </div>
    )
}