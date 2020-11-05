import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getChatRoomList = () => {
    return dispatch => {
        return axios.get('/api/chatroom/')
        .then(res => {
            dispatch(getChatRoomList_(res.data))
        })
    }
}

const getChatRoomList_ = (chatRoomList) => {
    return {
        type: actionTypes.GetChatRoomList,
        chatRoomList: chatRoomList
    }
}

export const createChatRoom = (chatRoom) => {
    return dispatch => {
        return axios.post('/api/chatroom/', chatRoom)
        .then(res => {
            dispatch(res => dispatch(createchatRoom_(res.data)))
        })
    }
}

const createchatRoom_ = (chatRoom) => {
    return {
        type: actionTypes.CreateChatRoom,
        chatRoom: chatRoom
    }
}

export const joinChatRoom = (chatRoomID) => {
    return dispatch => {
        return axios.get('/api/chatroom/' + chatRoomID + '/')
        .then(res => {
            dispatch(res => dispatch(joinChatRoom_(res.data)))
        })
    }
}

const joinChatRoom_ = (chatRoom) => {
    return {
        type: actionTypes.JoinChatRoom,
        chatRoom: chatRoom
    }
}

export const exitChatRoom = (chatRoomID) => {
    return dispatch => {
        return axios.get('/api/chatroom' + chatRoomID + '/')
        .then(res => {
            dispatch(res => dispatch(exitChatRoom_(res.data)))
        })
    }
}

const exitChatRoom_ = (chatRoom) => {
    return {
        type: actionTypes.ExitChatRoom
    }
}