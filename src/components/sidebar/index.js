// @flow

import React from 'react';
import './style.styl';

import MainLogo from './main-logo/index';
import MainNavigation from './mailbox/index';

const Sidebar = () => (
    <aside className="app__sidebar sidebar">
        <MainLogo/>
        <MainNavigation/>
    </aside>
);

export default Sidebar;
