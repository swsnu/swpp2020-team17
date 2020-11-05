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

export const login_ = (user) => {
    return { type: actionTypes.Login, user: user };
}
  
export const login = () => {
    return dispatch => {
        return axios.post('/api/login/',
        {
            credentials: 'include',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Headers': 'Content-Type, X-CSRFToken',
                'access-control-allow-headers': 'Content-Type, Authorization, X-Track, X-Super-Properties, X-Context-Properties, X-Failed-Requests, X-Fingerprint, X-RPC-Proxy, X-Debug-Options, x-client-trace-id, If-None-Match, X-RateLimit-Precision',
                'Content-Type': 'application/json',
                'X-ACCESS_TOKEN': csrftoken,
                'X-CSRFToken' : csrftoken
            } 
        }
        ).then(res => {
            dispatch(login_(res.data))
            dispatch(push('/'))
        });
    }
}

export const sendShallWe = () => {
    return
}

export const increaseLike = () => {
    return dispatch => {
        return axios.get
    }
}

export const getComments = (postID) => {
    return dispatch => {
        return axios.get('/api/comment/')
        .then((res) => dispatch(getComments_(postID, res.data)))
    }
}

const getComments_ = (postID, comment) => {
    let postComment = comment.filter(c => c.post_ID === postID)
    return {
        type: actionTypes.GetComments,
        comments: postComment
    }
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

export const createPost = (post) => {
    return dispatch => {
        return axios.post('/api/post/', post)
        .then(res => dispatch(createPost_(res.data)))
    }
}

const createPost_ = (post) => {
    return {
        type: actionTypes.CreatePost,
        post: post
    }
}

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

export const getGridPost = () => {
    return
}

export const putPost = () => {
    return
}

export const deletePost = () => {
    return
}



