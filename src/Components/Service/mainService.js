import { HttpService } from "./http.service"

let baseUrl = 'https://jsonplaceholder.typicode.com'

let http = new HttpService();

export const getPost=()=> {
  return http.get(`${baseUrl}/posts`)
    .then(res => res.data)
}

export const getSinglePost=(id)=>{
  return http.get(`${baseUrl}/posts/${id}`)
}

export const getComment=(id)=>{
  return http.get(`${baseUrl}/posts/${id}/comments`)
}
export const getAuthor=(id)=>{
  return http.get(`${baseUrl}/users/${id}`)
}