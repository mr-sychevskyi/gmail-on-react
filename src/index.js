// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store';
import App from './app/index';

const root = document.getElementById('root');

if (root !== null) {
    ReactDOM.render((
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    ), root);
}
