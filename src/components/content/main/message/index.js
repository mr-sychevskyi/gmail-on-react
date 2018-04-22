// @flow

import React from 'react';

import './style.styl';

import ButtonIcon from '../../../common/button-icon/index';
import InputGroup from '../../../common/input-group/index';
import type {MessageData} from './typedef';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, read, removeToTrash} from './actions';

type PropsNewEmail = {|
    recipients: {
        from?: string,
        to?: string,
        cc: string,
        bcc: string
    }
|};

const NewEmailRecipients = (props: PropsNewEmail) => {
    const currSection = location.pathname.slice(1);
    return (
        <div className="message__recipients recipient-fields">
            <InputGroup id="01"
                name={currSection === 'sent' ? 'To' : 'From'}
                placeholder={currSection === 'inbox' ? props.recipients.from : props.recipients.to}
                label={true}
                readOnly={true}
            />
            <InputGroup id="02" name="Cc" placeholder={props.recipients.cc} label={true} readOnly={true}/>
            <InputGroup id="03" name="Bcc" placeholder={props.recipients.bcc} label={true} readOnly={true}/>
        </div>
    );
};

type OwnProps = {|
    message: MessageData,
    isOpen: boolean
|};

type DispatchProps = {
    add: (collection: string, message: MessageData | {}) => void,
    read: (id: string, currSection: string, message: {}) => void,
    remove: (id: string, currSection: string) => void
};

type Props = OwnProps & DispatchProps;

const Message = (props: Props) => {
    const {message, isOpen} = props;
    const currSection = location.pathname.slice(1);
    const id = message._id.$oid;

    const handleMoveToInbox = e => {
        if (e) {
            e.stopPropagation();
        }

        props.add('messages-inbox', message);
        props.remove(id, currSection);
    };

    const handleMoveToSpam = e => {
        if (e) {
            e.stopPropagation();
        }
        props.add('messages-spam', message);
        props.remove(id, currSection);
    };

    const handleMoveBack = e => {
        if (e) {
            e.stopPropagation();
        }

        props.add(`messages-${message.prevCollection}`, message);
        props.remove(id, currSection);
    };

    const handleMoveToTrash = e => {
        if (e) {
            e.stopPropagation();
        }

        if (currSection !== 'trash') {
            props.add('messages-trash', {...message, prevCollection: currSection});
            props.remove(id, currSection);
        } else {
            (confirm('Delete message permanently?') && props.remove(id, currSection)); // eslint-disable-line no-alert
        }
    };

    const handleRead = () => {
        !message.isRead && props.read(id, currSection, {...message, isRead: 'true'});
    };

    return (
        <div className={isOpen ? 'message message-open' : 'message'} onClick={handleRead}>
            <h4 className={message.isRead ? 'message__subject' : 'message__subject message-unread'}>
                {message.subject}
            </h4>

            {isOpen && <NewEmailRecipients recipients={message.recipients}/>}

            <p className={message.isRead ? 'message__body' : 'message__body message-unread'}>
                {message.body}
            </p>

            <div className="message__controls">
                {currSection === 'inbox' && <ButtonIcon class="btn-spam" type="report" action={handleMoveToSpam}/>}
                {currSection === 'spam' &&
                <ButtonIcon class="btn-notspam" type="move_to_inbox" action={handleMoveToInbox}/>}
                {currSection === 'trash' && <ButtonIcon class="btn-restore" type="reply" action={handleMoveBack}/>}
                <ButtonIcon class="btn-trash" type="delete" action={handleMoveToTrash}/>
            </div>
        </div>
    );
};

const matchDispatchToProps = dispatch =>
    bindActionCreators({
        add,
        read,
        remove: removeToTrash
    }, dispatch);

export default connect(null, matchDispatchToProps)(Message);
