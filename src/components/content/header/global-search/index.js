// @flow

import React from 'react';

import {connect} from 'react-redux';

import {
    loadInboxMessages,
    loadSentMessages,
    loadSpamMessages,
    loadTrashMessages,
    filterMessages
} from './services/actions';
import GlobalSearchView from './views/index';

import type {MessageObj} from '../../../../routes/reducers';

type StateProps = {
    messagesInbox: MessageObj,
    messagesSent: MessageObj,
    messagesSpam: MessageObj,
    messagesTrash: MessageObj
};

type DispatchProps = {
    loadInboxMessages: () => void,
    loadSentMessages: () => void,
    loadSpamMessages: () => void,
    loadTrashMessages: () => void,
    filterMessages: () => void
};

type Props = StateProps & DispatchProps;

const GlobalSearch = (props: Props) => {
    const {currSection, messagesInbox, messagesSent, messagesSpam, messagesTrash} = props;
    let currMessages;

    switch (currSection) {
        case 'inbox':
            currMessages = messagesInbox;
            break;
        case 'sent':
            currMessages = messagesSent;
            break;
        case 'spam':
            currMessages = messagesSpam;
            break;
        case 'trash':
            currMessages = messagesTrash;
            break;
        default:
            currMessages = [];
    }

    return (
        <GlobalSearchView messages={currMessages} {...props}/>
    );
};

const mapStateToProps = state => ({
    messagesInbox: state.messages['messages-inbox'].data,
    messagesSent: state.messages['messages-sent'].data,
    messagesSpam: state.messages['messages-spam'].data,
    messagesTrash: state.messages['messages-trash'].data
});

const mapDispatchToProps = {loadInboxMessages, loadSentMessages, loadSpamMessages, loadTrashMessages, filterMessages};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSearch);
