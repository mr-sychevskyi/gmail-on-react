// @flow

import {post} from '../../../api/index';
import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE
} from '../../../constants';
import type {MessageData} from '../../content/main/message/typedef';
import type {ApiDispatcher} from '../../../store/typedef';

export const add = (message: MessageData): ApiDispatcher => dispatch => {
    return dispatch({
        CALL_API: {
            types: [
                POST_MESSAGE_REQUEST,
                POST_MESSAGE_SUCCESS,
                POST_MESSAGE_FAILURE
            ],
            endpoint: () => post('messages-sent', message)
        },
        collection: 'messages-sent'
    });
};
