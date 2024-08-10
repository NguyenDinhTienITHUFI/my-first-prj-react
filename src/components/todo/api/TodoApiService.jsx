import axios from 'axios'
import { apiClient } from './ApiClient'




export const retrieveAllTodosForUsername=(username)=>apiClient.get(`/users/${username}/todos`)

export const deleteTodoApi=(username,id)=>apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodosApi=(username,id)=>apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodosApi=(username,id,todo)=>apiClient.put(`/users/${username}/todos/${id}`,todo)

export const createTodosApi=(username,todo)=>apiClient.post(`/users/${username}/todos`,todo)