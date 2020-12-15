import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

export function getCookie(name) {
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


export const login = () => {
    return dispatch => {
        return axios.get('https://discord.com/api/oauth2/authorize?client_id=773940751608053771&redirect_uri=https%3A%2F%2Fshallwega.me%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify');
    }
}

const getUserList_ = (users) => {
    return {
        type: actionTypes.GetUserList,
        users: users
    }
}

export const getUserList = () => {
    return dispatch => {
        return axios.get('/api/user/')
        .then(res => {
            dispatch(dispatch(getUserList_(res.data)))
        })
    }
}

const getCurrentUser_= (currentUser) => {
    return {
        type: actionTypes.GetCurrentUser,
        currentUser: currentUser,
    }
}

export const getCurrentUser = () => {       // read user info from /api/user/
    return dispatch => {
        return axios.get('/api/currentUser/')
        .then(res => {
            return dispatch(getCurrentUser_(res.data))
        })
    }
}

export const getUser_ = (user) => {
    return {
        type: actionTypes.GetUser,
        user: user,
    }
}

export const getUser = (id) => {        // Get user with id
    return dispatch => {
        return axios.get('/api/user/' + id)
        .then(res => {
            dispatch(getUser_(res.data))
        })
    }
}

export const putUser_ = (user) => {
    return {
        type: actionTypes.PutUser,
        user: user,
    }
}

export const putUser = (user) => {
    return dispatch => {
        return axios.put('/api/user/' + user.id, user)
        .then(res => dispatch(putUser_(res.data)))
    }
}



