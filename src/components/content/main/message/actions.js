// @flow

import {post, put, remove} from '../../../../api';
import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE,

    UPDATE_MESSAGE_REQUEST,
    UPDATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_FAILURE,

    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAILURE
} from '../../../../constants';
import type {ApiDispatch} from '../../../../store/typedef';
import type {MessageData} from './typedef';

export const add = (collection: string, message: MessageData) => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                POST_MESSAGE_REQUEST,
                POST_MESSAGE_SUCCESS,
                POST_MESSAGE_FAILURE
            ],
            endpoint: () => post(collection, message)
        },
        collection
    });
};

export const read = (id: string, currSection: string, message: MessageData) => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                UPDATE_MESSAGE_REQUEST,
                UPDATE_MESSAGE_SUCCESS,
                UPDATE_MESSAGE_FAILURE
            ],
            endpoint: () => put(`messages-${currSection}/${id}`, message)
        },
        id,
        collection: `messages-${currSection}`
    });
};

export const removeToTrash = (id: string, currSection: string) => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                DELETE_MESSAGE_REQUEST,
                DELETE_MESSAGE_SUCCESS,
                DELETE_MESSAGE_FAILURE
            ],
            endpoint: () => remove(`messages-${currSection}/${id}`)
        },
        id,
        collection: `messages-${currSection}`
    });
};
