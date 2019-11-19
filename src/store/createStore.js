import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middleware = [
    thunk,
];

const enhancer = compose(
    process.env.ENVIROMENT !== 'production'
        ? composeWithDevTools(applyMiddleware(...middleware))
        : applyMiddleware(...middleware)
);

export default createStore(rootReducer, enhancer);
