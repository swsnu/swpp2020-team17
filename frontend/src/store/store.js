import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';                                           
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import userReducer from './reducers/user';
import tagReducer from './reducers/tag';
import chatroomReducer from './reducers/chatroom';
import postReducer from './reducers/post';
import commentReducer from './reducers/comment';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
  ur: userReducer,
  tg: tagReducer,
  chat: chatroomReducer,
  ps: postReducer,
  cm: commentReducer,
  router: connectRouter(history),
});
export const middlewares = [thunk, routerMiddleware(history)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)));

export default store;