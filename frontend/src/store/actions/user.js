import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
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
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const login_ = (user) => {
    return { type: actionTypes.Login, user: user };
}
  
export const login = () => {
    return dispatch => {
        return axios.get('https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify',
        
        ).then(res => {
            dispatch(login_(res.data))
            dispatch(push('/'))
        });
    }
}

export const sendShallWe = () => {
    return
}

export const getUserPage = (id) => {
    return dispatch => {
        return axios.get('/api/user/' + id + '/')
        .then(res => {
            dispatch(getUserPage_(res.data))
        })
    }
}

const getUserPage_ = (user) => {
    return {
        type: actionTypes.GetUserPage,
        user: user
    }
}

export const getTagList = () => {
    return dispatch => {
        return axios.get('/api/tag/')
        .then(res => {
            dispatch(res => dispatch(getTagList_(res.data)))
        })
    }
}

const getTagList_ = (tags) => {
    return {
        type: actionTypes.GetTagList,
        tags: tags
    }
}

export const getUserList = () => {
    return dispatch => {
        return axios.get('/api/user/')
        .then(res => {
            dispatch(res => dispatch(getUserList_(res.data)))
        })
    }
}

const getUserList_ = (users) => {
    return {
        type: actionTypes.GetUserList,
        users: users
    }
}

export const addTag = () => {
    return
}

export const followUser = () => {
    return
}

export const applySetting = () => {
    return
}



