// @flow

import {get} from '../../api';
import {
    GET_MESSAGES_TRASH_REQUEST,
    GET_MESSAGES_TRASH_SUCCESS,
    GET_MESSAGES_TRASH_FAILURE
} from '../../constants';
import type {ApiDispatcher} from '../../store/typedef';

const LIMIT = 1000;

export const loadMessages = (): ApiDispatcher => dispatch => {
    return dispatch({
        CALL_API: {
            types: [
                GET_MESSAGES_TRASH_REQUEST,
                GET_MESSAGES_TRASH_SUCCESS,
                GET_MESSAGES_TRASH_FAILURE
            ],
            endpoint: () => get('messages-trash', {l: LIMIT})
        }
    });
};
