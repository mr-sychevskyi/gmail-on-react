// @flow

import React, {Component} from 'react';
import './style.styl';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {add} from './actions';

import NewEmailHeader from './new-email-header/index';
import NewEmailContent from './new-email-content/index';
import NewEmailControls from './new-email-controls/index';

type OwnProps = { onClose: () => void };
type DispatchProps = { add: (message: State) => void };
type Props = OwnProps & DispatchProps;

type State = {
    subject: string,
    body: string,
    isRead: string,
    recipients: {
        to: string,
        cc: string,
        bcc: string
    },
    createdAt: string | Date
};

class NewEmail extends Component<Props, State> {
    state = {
        subject: '',
        body: '',
        isRead: 'true',
        recipients: {
            to: '',
            cc: 'cc@email.me',
            bcc: 'bcc@email.me'
        },
        createdAt: ''
    };

    handleTextChange = e => {
        if (e) {
            const input = e.target.name;

            this.setState({
                subject: input === 'subject' ? e.target.value : this.state.subject,
                body: input === 'message body' ? e.target.value : this.state.body,
                recipients: {
                    to: input === 'To' ? e.target.value : this.state.recipients.to,
                    cc: input === 'Cc' ? e.target.value : this.state.recipients.cc,
                    bcc: input === 'Bcc' ? e.target.value : this.state.recipients.bcc
                },
                createdAt: new Date()
            });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state);
        this.props.onClose();
    };

    render() {
        return (
            <form className="new-email" onSubmit={this.handleSubmit}>
                <NewEmailHeader onClose={this.props.onClose}/>
                <NewEmailContent action={this.handleTextChange}/>
                <NewEmailControls onClose={this.props.onClose}/>
            </form>
        );
    }
}

const matchDispatchToProps = dispatch => (bindActionCreators({add}, dispatch));
export default connect(null, matchDispatchToProps)(NewEmail);
