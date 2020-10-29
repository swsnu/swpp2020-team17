import axios from 'axios';
import { useReducer } from 'react';
import * as actionTypes from './actionTypes';

export const Login = () => {
    return dispatch => {
        return axios.get('api/user/:id')
            
    }
}

export const Logout = () => {
    return
}

