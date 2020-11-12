import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';'); for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break; 
            }
            return cookieValue; 
        }
    } 
}
const csrftoken = getCookie('csrftoken');

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

const getPostList_ = (posts) => {
    return {
        type: actionTypes.GetPostList,
        posts: posts,
    }
}

export const getPostList = () => {
    return dispatch => {
        return axios.get('/api/post/')
        .then((res) => dispatch(getPostList_(res.data)))
    }
}

const createPost_ = () => {}
export const createPost = () => {}

const getPost_ = () => {}
export const getPost = () => {}

const putPost_ = () => {}
export const putPost = () => {}

const deletePost_ = () => {}
export const deletePost = () => {}