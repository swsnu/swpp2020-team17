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

const getChatroomList_ = (chatRoomList) => {
    return {
        type: actionTypes.GetChatroomList,
        chatRoomList: chatRoomList
    }
}

export const getChatroomList = () => {
    return dispatch => {
        return axios.get('/api/chatroom/')
        .then(res => {
            dispatch(getChatroomList_(res.data))
        })
    }
}

const createChatroom_ = (chatroom) => {
    return {
        type: actionTypes.CreateChatroom,
        chatroom: chatroom
    }
}

export const createChatroom = (chatroom) => {
    return dispatch => {
        return axios.post('/api/chatroom/', chatroom)
        .then(res => {
            dispatch(res => dispatch(createChatroom_(res.data)))
        })
    }
}

const getChatroom_ = () => {}
export const getChatroom = () => {}

const putChatroom_ = () => {}
export const putChatroom = () => {}

const deleteChatroom_ = () => {}
export const deleteChatroom = () => {}


