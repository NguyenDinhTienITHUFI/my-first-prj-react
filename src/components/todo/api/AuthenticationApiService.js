import axios from 'axios'
import { apiClient } from './ApiClient'
export const excuteBasicAuthenticateService=(token)=>apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})

export const excuteJwtAuthenticateService=(username,password)=>apiClient.post(`/authenticate`
    ,{username,password})