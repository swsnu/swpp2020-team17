import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import userReducer from './store/reducers/user';
import chatroomReducer from './store/reducers/chatroom';
import tagReducer from './store/reducers/tag';
import postReducer from './store/reducers/post';
import commentReducer from './store/reducers/comment';

const history = createBrowserHistory();
const rootReducer = combineReducers({
  ur: userReducer,
  tg: tagReducer,
  chat: chatroomReducer,
  ps: postReducer,
  cm: commentReducer,
  router: connectRouter(history),
});

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] Next State', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(logger, thunk, routerMiddleware(history))));

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();