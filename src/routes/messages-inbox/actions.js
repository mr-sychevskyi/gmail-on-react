// @flow

import {get} from '../../api';
import {
    GET_MESSAGES_INBOX_REQUEST,
    GET_MESSAGES_INBOX_SUCCESS,
    GET_MESSAGES_INBOX_FAILURE
} from '../../constants';
import type {ApiDispatcher} from '../../store/typedef';

const LIMIT = 1000;

export const loadMessages = (): ApiDispatcher => dispatch => {
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
