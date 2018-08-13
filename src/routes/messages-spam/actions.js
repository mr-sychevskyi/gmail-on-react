// @flow

import {get} from '../../api';
import {
    GET_MESSAGES_SPAM_REQUEST,
    GET_MESSAGES_SPAM_SUCCESS,
    GET_MESSAGES_SPAM_FAILURE
} from '../../constants';
import type {ApiDispatcher} from '../../store/typedef';

const LIMIT = 1000;

export const loadMessages = (): ApiDispatcher => dispatch => {
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
