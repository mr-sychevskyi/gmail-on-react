// @flow

import type {MessageData} from '../components/content/main/message/typedef';

export type Action =
    | { type: 'GET_MESSAGES_INBOX_REQUEST' }
    | { type: 'GET_MESSAGES_INBOX_SUCCESS', response: Array<MessageData> }
    | { type: 'GET_MESSAGES_INBOX_FAILURE', error: string }

    | { type: 'GET_MESSAGES_SENT_REQUEST' }
    | { type: 'GET_MESSAGES_SENT_SUCCESS', response: Array<MessageData> }
    | { type: 'GET_MESSAGES_SENT_FAILURE', error: string }

    | { type: 'GET_MESSAGES_SPAM_REQUEST' }
    | { type: 'GET_MESSAGES_SPAM_SUCCESS', response: Array<MessageData> }
    | { type: 'GET_MESSAGES_SPAM_FAILURE', error: string }

    | { type: 'GET_MESSAGES_TRASH_REQUEST' }
    | { type: 'GET_MESSAGES_TRASH_SUCCESS', response: Array<MessageData> }
    | { type: 'GET_MESSAGES_TRASH_FAILURE', error: string }

    | { type: 'POST_MESSAGE_REQUEST' }
    | { type: 'POST_MESSAGE_SUCCESS', response: Array<MessageData>, id: string, collection: string }
    | { type: 'POST_MESSAGE_FAILURE', error: string, collection: string }

    | { type: 'UPDATE_MESSAGE_REQUEST' }
    | { type: 'UPDATE_MESSAGE_SUCCESS', id: string, collection: string }
    | { type: 'UPDATE_MESSAGE_FAILURE', error: string, collection: string }

    | { type: 'FILTER_MESSAGES', response: Array<MessageData> }

    | { type: 'DELETE_MESSAGE_REQUEST' }
    | { type: 'DELETE_MESSAGE_SUCCESS', id: string, collection: string }
    | { type: 'DELETE_MESSAGE_FAILURE', error: string, collection: string };
