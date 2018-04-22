// @flow

import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.styl';

type Props = {|
    to: string,
    section: string,
    type: string,
    icon?: boolean,
    iconType?: string,
    badge?: number
|};

const MailBoxLink = (props: Props) => {
    const check = !(!props.badge || props.badge === 0);

    return (
        <NavLink to={props.to} className={`mailbox__link btn btn-navigation ${props.type}`}>
            {props.icon && <i className="material-icons">{props.iconType}</i>}
            <span className={check ? 'is-unread' : ''}>{props.section}</span>
            {check && <span className="badge">{props.badge}</span>}
        </NavLink>
    );
};

export default MailBoxLink;
