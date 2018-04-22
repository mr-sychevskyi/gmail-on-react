// @flow

import {combineReducers} from 'redux';

import {messages} from '../routes/reducers';

import type {State as messagesState} from '../routes/reducers';

export type State = {|
    messages: messagesState
|};

export default combineReducers({messages});
