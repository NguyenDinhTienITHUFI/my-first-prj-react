import axios from 'axios'
// export function retrieveHelloWorldBean(){
//    return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)
export const retrieveHelloWorldBean=()=>apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable=(username)=>apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization: 'Basic dGllbnZ1YTphZG1pbg=='
    }
})

export const excuteBasicAuthenticateService=(token)=>apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})