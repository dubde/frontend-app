
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';

export default function configureStore() {
    const store = createStore(reducer);

    return store;
}