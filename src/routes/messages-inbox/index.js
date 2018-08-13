// @flow

import React, {Component} from 'react';
import '../style.styl';

import Message from '../../components/content/main/message/index';
import Loader from '../../components/common/loader/index';

import {connect} from 'react-redux';
import {loadMessages} from './actions';
import type {MessageObj} from '../reducers';

type StateProps = {
    messages: MessageObj,
    filteredMessages: MessageObj,
    loaded: boolean
};
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
        const {filteredMessages, loaded} = this.props;

        if (!loaded) {
            return <Loader/>;
        }

        return (
            filteredMessages.length === 0
                ?
                <h2 className="info-title">No messages!</h2>
                :
                <section className="message-group">
                    <h4 className="message-group__title">This month</h4>
                    <ul className="message-group__list">
                        {
                            filteredMessages.map(item =>
                                (<li key={item._id.$oid} onClick={this.accordionClick(item._id.$oid)}>
                                    <Message message={item} isOpen={this.state.openMessageId === item._id.$oid}/>
                                </li>)
                            ).reverse()
                        }
                    </ul>
                </section>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages['messages-inbox'].data,
    filteredMessages: state.messages['messages-inbox'].filteredData,
    loaded: state.messages['messages-inbox'].loaded
});

const matchDispatchToProps = {loadMessages};

export default connect(mapStateToProps, matchDispatchToProps)(MessageGroup);
