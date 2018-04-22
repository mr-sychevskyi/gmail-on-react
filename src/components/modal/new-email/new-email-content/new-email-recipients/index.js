// @flow

import React from 'react';
import './style.styl';

import InputGroup from '../../../../common/input-group/index';

type Props = {| action: () => void |};

const NewEmailRecipients = (props: Props) => (
    <div className="new-email-content__recipients recipient-fields">
        <InputGroup type="email" id="to" name="To" placeholder="to@email.me" label={true} required={true}
            action={props.action}
        />
        <InputGroup type="email" id="cc" name="Cc" placeholder="cc@email.me" label={true} action={props.action}/>
        <InputGroup type="email" id="bcc" name="Bcc" placeholder="bcc@email.me" label={true} action={props.action}/>
    </div>
);

export default NewEmailRecipients;
