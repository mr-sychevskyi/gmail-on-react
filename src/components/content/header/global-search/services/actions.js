// @flow

import {get} from '../../../../../api/index';
import {
    GET_MESSAGES_INBOX_REQUEST,
    GET_MESSAGES_INBOX_SUCCESS,
    GET_MESSAGES_INBOX_FAILURE,

    GET_MESSAGES_SENT_REQUEST,
    GET_MESSAGES_SENT_SUCCESS,
    GET_MESSAGES_SENT_FAILURE,

    GET_MESSAGES_SPAM_REQUEST,
    GET_MESSAGES_SPAM_SUCCESS,
    GET_MESSAGES_SPAM_FAILURE,

    GET_MESSAGES_TRASH_REQUEST,
    GET_MESSAGES_TRASH_SUCCESS,
    GET_MESSAGES_TRASH_FAILURE,

    FILTER_MESSAGES
} from '../../../../../constants/index';
import type {ApiDispatcher} from '../../../../../store/typedef';

const LIMIT = 1000;

export const loadInboxMessages = (): ApiDispatcher => dispatch => {
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

export const loadSentMessages = (): ApiDispatcher => dispatch => {
    return dispatch({
        CALL_API: {
            types: [
                GET_MESSAGES_SENT_REQUEST,
                GET_MESSAGES_SENT_SUCCESS,
                GET_MESSAGES_SENT_FAILURE
            ],
            endpoint: () => get('messages-sent', {l: LIMIT})
        }
    });
};

export const loadSpamMessages = (): ApiDispatcher => dispatch => {
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

export const loadTrashMessages = (): ApiDispatcher => dispatch => {
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

export const filterMessages = (collection, currentMessages) => {
    return {
        type: FILTER_MESSAGES,
        collection,
        currentMessages
    };
};
