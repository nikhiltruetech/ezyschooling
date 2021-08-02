import { HttpService } from "./http.service"

let baseUrl = 'https://jsonplaceholder.typicode.com'

let http = new HttpService();
// Fetching All Post
export const getPost = () => {
  return http.get(`${baseUrl}/posts`)
    .then(res => res.data)
}
// Fetching single Post
export const getSinglePost = (id) => {
  return http.get(`${baseUrl}/posts/${id}`)
}
// Fetching Comments as per Id
export const getComment = (id) => {
  return http.get(`${baseUrl}/posts/${id}/comments`)
}
// Fetching Author as per Id
export const getAuthor = (id) => {
  return http.get(`${baseUrl}/users/${id}`)
}