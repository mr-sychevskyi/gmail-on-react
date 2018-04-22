// @flow

import React from 'react';

import NewEmailRecipients from './new-email-recipients/index';
import NewEmailBody from './new-email-body/index';

type Props = {| action: () => void |};

const NewEmailContent = (props: Props) => (
    <div className="new-email-content">
        <NewEmailRecipients action={props.action}/>
        <NewEmailBody action={props.action}/>
    </div>
);

export default NewEmailContent;
