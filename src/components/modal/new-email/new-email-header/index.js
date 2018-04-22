// @flow

import React from 'react';
import './style.styl';

import ButtonIcon from '../../../common/button-icon/index';

type Props = {| onClose: () => void |};

const NewEmailHeader = (props: Props) => (
    <div className="new-email-header">
        <h3 className="new-email-header__title">New email</h3>
        <ButtonIcon type="close" class="btn-close" action={props.onClose}/>
    </div>
);

export default NewEmailHeader;
