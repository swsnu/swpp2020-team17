import * as actionTypes from './actionTypes';
import axios from 'axios';

import { push } from 'connected-react-router';

export const login_ = (user) => {
    return { type: actionTypes.LOGIN, user: user };
}
  
export const login = () => {
    return dispatch => {
        return axios.get('/api/login/')
            .then(res => {
                dispatch(login_(res.data))
            });
    }
}