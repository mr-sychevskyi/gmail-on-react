// @flow

import React from 'react';
import './style.styl';

import Button from '../../../common/button-form/index';

type Props = {| onClose: () => void |};

const NewEmailControls = (props: Props) => (
    <div className="new-email-controls">
        <Button type="reset" view="secondary" action={props.onClose}/>
        <Button type="submit" view="primary"/>
    </div>
);

export default NewEmailControls;
