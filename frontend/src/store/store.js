import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import infoReducer from './reducer';
import { connectRouter, routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
const rootReducer = combineReducers({
    info: infoReducer,
    router: connectRouter(history)
});
export const middleware = [thunk, routerMiddleware(history)]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware)));