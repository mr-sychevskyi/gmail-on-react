// @flow

import React, {Component} from 'react';
import '../style.styl';

import Message from '../../components/content/main/message';
import Loader from '../../components/common/loader';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadMessages} from './actions';
import type {MessageObj} from '../reducers';

type StateProps = { messages: MessageObj };
type DispatchProps = { loadMessages: () => void };

type Props = StateProps & DispatchProps;

type State = {| openMessageId: ?string |};

class MessageGroup extends Component<Props, State> {
    state = {openMessageId: null};

    componentDidMount() {
        this.props.loadMessages();
    }

    accordionClick = (MessageId: string) => () => {
        this.setState({
            openMessageId: this.state.openMessageId !== MessageId ? MessageId : null
        });
    };

    render() {
        const messageList = this.props.messages.data.map(item =>
            (<li key={item._id.$oid} onClick={this.accordionClick(item._id.$oid)}>
                <Message message={item} isOpen={this.state.openMessageId === item._id.$oid}/>
            </li>)
        ).reverse();

        if (!this.props.messages.loaded) {
            return <Loader/>;
        }

        return (
            this.props.messages.data.length === 0
                ? <h2 className="info-title">No messages!</h2>
                :
                <section className="message-group">
                    <h4 className="message-group__title">This month</h4>
                    <ul className="message-group__list">
                        {messageList}
                    </ul>
                </section>
        );
    }
}

const mapStateToProps = state => ({messages: state.messages['messages-trash']});
const matchDispatchToProps = dispatch => (bindActionCreators({loadMessages}, dispatch));

export default connect(mapStateToProps, matchDispatchToProps)(MessageGroup);
