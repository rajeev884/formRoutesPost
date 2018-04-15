import axios from 'axios';
import {API_KEY} from '../../API';

export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const ROOT_URL = `https://reduxblog.herokuapp.com/api/posts?key=${API_KEY}`

export function fetchPosts(){
    const request =axios.get(`${ROOT_URL}`);
    return{
        type:FETCH_POST,
        payload:request
    };   

}
export function createPost(props){
    console.log(props);
    const request =axios.post(`${ROOT_URL}`,props);
    return{
        type:CREATE_POST,
        payload:request
    };   

}