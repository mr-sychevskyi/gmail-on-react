// @flow

import {get} from '../../../api';
import {
    GET_MESSAGES_INBOX_REQUEST,
    GET_MESSAGES_INBOX_SUCCESS,
    GET_MESSAGES_INBOX_FAILURE,

    GET_MESSAGES_SPAM_REQUEST,
    GET_MESSAGES_SPAM_SUCCESS,
    GET_MESSAGES_SPAM_FAILURE
} from '../../../constants';
import type {ApiDispatcher} from '../../../store/typedef';

const LIMIT = 1000;

export const loadMessagesInbox = (): ApiDispatcher => dispatch => {
    return dispatch({
        CALL_API: {
            types: [
                GET_MESSAGES_INBOX_REQUEST,
                GET_MESSAGES_INBOX_SUCCESS,
                GET_MESSAGES_INBOX_FAILURE
            ],
            endpoint: () => get('messages-inbox', {l: LIMIT})
        }
    });
};

export const loadMessagesSpam = (): ApiDispatcher => dispatch => {
    return dispatch({
        CALL_API: {
            types: [
                GET_MESSAGES_SPAM_REQUEST,
                GET_MESSAGES_SPAM_SUCCESS,
                GET_MESSAGES_SPAM_FAILURE
            ],
            endpoint: () => get('messages-spam', {l: LIMIT})
        }
    });
};
