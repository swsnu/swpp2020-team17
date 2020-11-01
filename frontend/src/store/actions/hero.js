import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';


const getHeros_ = (heros) => {
  return { type: actionTypes.GET_ALL, heros: heros };
};

export const getHeros = () => {
  return dispatch => {
    return axios.get('/hero/info/')
      .then(res => dispatch(getHeros_(res.data)));
  };
};

const getHero_ = (hero) => {
  return { type: actionTypes.GET_HERO, target: hero };
};

export const getHero = (id) => {
  return dispatch => {
    return axios.get('/hero/info/' + id + '/')
      .then(res => {
        dispatch(getHero_(res.data))
      });
  };
};

const postHero_ = (hero) => {
  return {
    type: actionTypes.ADD_HERO,
    id: hero.id,
    name: hero.name,
    age: hero.age,
  };
};

export const postHero = (hero) => {
  return (dispatch) => {
    return axios.post('/hero/info/', hero)
      .then(res => {
        dispatch(postHero_(res.data));
        dispatch(push('/heros/'));
      });
  };
};

const putHero_ = (hero) => {
  return {
    type: actionTypes.PUT_HERO,
    id: hero.id,
    name: hero.name,
    age: hero.age,
  };
};

export const putHero = (hero) => {
  return dispatch => {
    return axios.put('/hero/info/' + hero.id + '/', hero)
      .then(res => dispatch(putHero_(hero)))
      .then(() => dispatch(push('/heros/'+ hero.id)));
  };
};