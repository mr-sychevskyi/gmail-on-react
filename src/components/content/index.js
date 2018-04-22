// @flow

import React from 'react';

import './style.styl';

import Header from './header/index';
import Main from './main/index';

const Content = () => (
    <div className="app__content content">
        <Header/>
        <Main/>
    </div>
);

export default Content;
