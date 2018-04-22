// @flow

import React from 'react';

import './style.styl';

import Sidebar from '../components/sidebar/index';
import Content from '../components/content/index';
import ModalParent from '../components/modal/index';

const App = () => (
    <div className="app">
        <Sidebar/>
        <Content/>
        <ModalParent/>
    </div>
);

export default App;
