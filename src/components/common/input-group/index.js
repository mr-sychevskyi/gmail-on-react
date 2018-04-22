// @flow

import React from 'react';
import './style.styl';

export type Props = {|
    label: boolean,
    id: string,
    name: string,
    type?: string,
    placeholder: ?string,
    required?: boolean,
    readOnly?: boolean,
    action?: () => void
|};

const InputGroup = (props: Props) => (
    <div className="form-group">
        {props.label === true && <label className="form-group__label" htmlFor={props.id}>{props.name}</label>}
        <input className="form-group__input"
            id={props.id}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            readOnly={props.readOnly}
            onChange={props.action}
        />
    </div>
);

export default InputGroup;
