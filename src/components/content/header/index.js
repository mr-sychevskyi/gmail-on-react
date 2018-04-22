// @flow

import React from 'react';
import './style.styl';

import HeaderSearch from './header-search/index';
import HeaderUser from './header-user/index';

const Header = () => {
    const currSection = location.pathname.slice(1);
    return (
        <header className={`header header__${currSection}`}>
            <HeaderSearch/>
            <HeaderUser/>
        </header>
    );
};

export default Header;
