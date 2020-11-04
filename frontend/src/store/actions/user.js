import * as actionTypes from './actionTypes';
import axios from 'axios';

import { push } from 'connected-react-router';

export const login_ = (user) => {
    return { type: actionTypes.Login, user: user };
}
  
export const login = () => {
    return dispatch => {
        return axios.post('/api/login/')
            .then(res => {
                dispatch(login_(res.data))
            });
    }
}

