// @flow

import React from 'react';
import {NavLink} from 'react-router-dom';

import './style.styl';
import logoUrl from './main-logo.png';

const MainLogo = () => (
    <NavLink to="/" className="sidebar__logo main-logo">
        <img src={logoUrl} className="img-responsive" alt="logo"/>
    </NavLink>
);

export default MainLogo;
