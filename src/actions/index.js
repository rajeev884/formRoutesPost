import axios from 'axios';
import {API_KEY} from '../../API';

export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_BY_ID = "FETCH_POST_BY_ID";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const ROOT_URL = `https://reduxblog.herokuapp.com/api/posts/`

export function fetchPosts(){
    const request =axios.get(`${ROOT_URL}${API_KEY}`);
    return{
        type:FETCH_POST,
        payload:request
    };   

}
export function createPost(props){
    console.log(props);
    const request =axios.post(`${ROOT_URL}${API_KEY}`,props);
    return{
        type:CREATE_POST,
        payload:request
    };   

}
export function fetchPostById(id){
    const request =axios.get(`${ROOT_URL}${id}${API_KEY}`);
    return{
        type:FETCH_POST_BY_ID,
        payload:request
    };   

}
export function deletePost(id){
    const request =axios.delete(`${ROOT_URL}${id}${API_KEY}`);
    return{
        type:DELETE_POST,
        payload:request
    };   

}