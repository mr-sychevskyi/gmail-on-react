// @flow

import React, {Component} from 'react';

import {connect} from 'react-redux';

import './style.styl';
import MailBoxLink from './mailbox-item/index';
import {loadMessagesInbox, loadMessagesSpam} from './actions';

type StateProps = {
    unreadMessagesInbox: number,
    unreadMessagesSpam: number
};

type DispatchProps = {
    loadMessagesInbox: () => void,
    loadMessagesSpam: () => void
};

type Props = StateProps & DispatchProps;

class MainNavigation extends Component<Props> {
    componentDidMount() {
        this.props.loadMessagesInbox();
        this.props.loadMessagesSpam();
    }

    render() {
        const {unreadMessagesInbox, unreadMessagesSpam} = this.props;

        return (
            <nav className="sidebar__navigation main-navigation">
                <ul className="mailbox">
                    <li className="mailbox__item">
                        <MailBoxLink to="/inbox" section="Inbox" type="btn-inbox" icon={true}
                            badge={unreadMessagesInbox}
                            iconType="move_to_inbox"
                        />
                    </li>
                    <li className="mailbox__item">
                        <MailBoxLink to="/sent" section="Sent" type="btn-sent" icon={true} iconType="send"/>
                    </li>
                    <li className="mailbox__item">
                        <MailBoxLink to="/spam" section="Spam" type="btn-spam" icon={true} badge={unreadMessagesSpam}
                            iconType="report"
                        />
                    </li>
                    <li className="mailbox__item">
                        <MailBoxLink to="/trash" section="Trash" type="btn-trash" icon={true} iconType="delete"/>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    unreadMessagesInbox: state.messages['messages-inbox'].data.filter(item => !item.isRead).length,
    unreadMessagesSpam: state.messages['messages-spam'].data.filter(item => !item.isRead).length
});

const matchDispatchToProps = {
    loadMessagesInbox,
    loadMessagesSpam
};

export default connect(mapStateToProps, matchDispatchToProps, null, {pure: false})(MainNavigation);
