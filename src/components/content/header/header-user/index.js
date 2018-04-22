// @flow

import React from 'react';
import './style.styl';

import avatarUrl from './avatar.png';

const HeaderUser = () => (
    <a className="header__user user btn">
        <img src={avatarUrl} className="user-avatar img-responsive" alt="avatar"/>
    </a>
);
export default HeaderUser;
