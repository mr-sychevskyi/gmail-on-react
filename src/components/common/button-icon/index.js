// @flow

import React from 'react';

type Props = {|
    class: string,
    type: string,
    action?: () => void
|};

const ButtonIcon = (props: Props) => (
    <a className={`btn ${props.class}`} onClick={props.action}>
        <i className="material-icons">{props.type}</i>
    </a>
);

export default ButtonIcon;
