// @flow

import React from 'react';
import './style.styl';

type Props = {|
    view: string,
    type: string,
    action?: () => void
|};

const Button = (props: Props) => (
    <button className={props.view === 'primary' ? 'btn-form btn-primary' : 'btn-form btn-secondary'}
        type={props.type}
        onClick={props.action}>
        {props.view === 'primary' ? 'Send' : 'Cancel'}
    </button>
);

export default Button;
