// @flow

import React from 'react';
import './style.styl';

import ButtonIcon from '../../../common/button-icon/index';

const HeaderSearch = () => (
    <form className="header__search search-form">
        <ButtonIcon class="search-form__button btn-search" type="search"/>
        <input className="search-form__input" type="text" placeholder="Search"/>
        <ButtonIcon class="search-form__button btn-mic" type="mic"/>
    </form>
);

export default HeaderSearch;
