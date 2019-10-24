import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './app/app';
import { configureStore } from 'redux-starter-kit';
import { reducer } from './store/reducers';

const store = configureStore({
    reducer: reducer
}); 
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
