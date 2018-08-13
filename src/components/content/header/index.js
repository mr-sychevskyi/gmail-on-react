// @flow

import React from 'react';
import './style.styl';

import GlobalSearch from './global-search';
import HeaderUser from './header-user';

const Header = () => {
    const currSection = location.pathname.slice(1);
    return (
        <header className={`header header__${currSection}`}>
            <GlobalSearch currSection={currSection}/>
            <HeaderUser/>
        </header>
    );
};

export default Header;
