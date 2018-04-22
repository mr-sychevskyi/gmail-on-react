// @flow

import React from 'react';
import './style.styl';

import InputGroup from '../../../../common/input-group/index';

type Props = {| action: () => void |};

const NewEmailBody = (props: Props) => (
    <div className="new-email-content__body email-fields">
        <InputGroup type="text" id="subject" name="subject" placeholder="Subject" label={false} action={props.action}/>
        <div className="form-group">
            <textarea className="form-group__textarea" name="message body" placeholder="Message body" rows="12"
                onChange={props.action}
            />
        </div>
    </div>
);

export default NewEmailBody;
