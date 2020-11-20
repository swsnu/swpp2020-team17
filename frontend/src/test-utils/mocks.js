import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';                                           
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { history, middlewares } from '../store/store';
import * as actionTypes from '../store/actions/actionTypes';

const getMockUserReducer = jest.fn(
  initialState => (state = initialState, action) => {
    switch (action.type) {
      default:
        break;
    }
    return state;
  }
);

const getMockChatroomReducer = jest.fn(
    initialState => (state = initialState, action) => {
      switch (action.type) {
        default:
          break;
        }
        return state;
    }
);

const getMockTagReducer = jest.fn(
    initialState => (state = initialState, action) => {
      switch (action.type) {
        default:
          break;
        }
        return state;
    }
);

const getMockPostReducer = jest.fn(
    initialState => (state = initialState, action) => {
      switch (action.type) {
        default:
          break;
        }
        return state;
    }
);

export const getMockStore = (initialState) => {
  const mockUserReducer = getMockUserReducer(initialState);
  const mockChatroomReducer = getMockChatroomReducer(initialState);
  const mockTagReducer = getMockTagReducer(initialState);
  const mockPostReducer = getMockPostReducer(initialState);
  const rootReducer = combineReducers({
    us: mockUserReducer,
    chat: mockChatroomReducer,
    tg: mockTagReducer,
    ps: mockPostReducer,
    router: connectRouter(history),
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const mockStore = createStore(rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)));
  return mockStore;
}


