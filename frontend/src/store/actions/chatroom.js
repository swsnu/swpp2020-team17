import * as actionTypes from './actionTypes';
import axios from 'axios';
import { push } from 'react-router-redux'

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
axios.defaults.xsrfHeaderName = 'x-csrftoken'

const getChatroomList_ = (chatroomList) => {
    return {
        type: actionTypes.GetChatroomList,
        chatrooms: chatroomList
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

export const createChatroom = (user, chatroom) => {
    return dispatch => {
        return axios.post('/api/chatroom/', chatroom)
        .then(res1 => {
            dispatch(createChatroom_(res1.data));

            dispatch(createChatting_(res1.data, user));
            
            user.chatroom = res1.data.id;
            axios.put('/api/user/' + user.id, user)
            .then(res2 => {
                dispatch(putUser_(res2.data));
            })
        })
    }
}

const getChatroom_ = (chatroom) => {
    return {
        type: actionTypes.GetChatroom,
        chatroom: chatroom
    }
}
export const getChatroom = (id) => {
    return dispatch => {
        return axios.get('/api/chatroom/' + id)
        .then(res => {
            dispatch(getChatroom_(res.data))
        })
    }
}

const putChatroom_ = (chatroom) => {
    return {
        type: actionTypes.PutChatroom,
        chatroom: chatroom
    }
}
export const putChatroom = (chatroom) => {
    return dispatch => {
        return axios.put('/api/chatroom/' + chatroom.id, chatroom)
        .then(res => {
            dispatch(putChatroom_(res.data))
        })
    }
}

const deleteChatroom_ = (chatroom) => {
    return {
        type: actionTypes.DeleteChatroom,
        chatroom: chatroom
    }
}
export const deleteChatroom = (id) => {
    return dispatch => {
        return axios.delete('/api/chatroom/' + id)
        .then(res => {
            dispatch(deleteChatroom_(res.data))
        })
    }
}

export const putUser_ = (user) => {
    return {
        type: actionTypes.PutUser,
        user: user,
    }
}

export const sendShallWe = (newChatroom, sendingUser, receivingUser) => {
    return dispatch => {
        return axios.post('/api/chatroom/', newChatroom)
        .then(res1 => {
            dispatch(createChatroom_(res1.data));
            console.log(receivingUser);
            receivingUser.shallWeRoomList.push(res1.data.id);

            dispatch(createChatting_(res1.data, sendingUser));

            axios.put('/api/user/' + receivingUser.id, receivingUser)
            .then(res2 => {
                dispatch(putUser_(res2.data))
            })
            sendingUser.chatroom = res1.data.id;
            axios.put('/api/user/' + sendingUser.id, sendingUser)
            .then(res2 => {
                dispatch(putUser_(res2.data));
            })
        })
    }
}

export const createChatting_ = (chatroom, user) => {
    return {
        type: actionTypes.CreateChatting,
        chatroom: chatroom,
        user: user,
    }
}

export const createChatting = (chatroomId, user) => {
    return dispatch => {
        return axios.get('api/chatroom/' + chatroomId + '/')
        .then(res1 => {
            dispatch(dispatch(createChatting_(res1.data, user)));
        });
    }
}

export const deleteChatting_ = () => {
    return {
        type: actionTypes.DeleteChatting,
    }
}

export const deleteChatting = () => {
    return dispatch => {
        return dispatch(deleteChatting_());
    }
}