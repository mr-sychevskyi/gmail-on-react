// @flow

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

    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE,

    UPDATE_MESSAGE_REQUEST,
    UPDATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_FAILURE,

    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAILURE
} from '../constants';
import type {Action} from './typedef';
import type {MessageData} from '../components/content/main/message/typedef';

export type MessageObj = {
    data: Array<MessageData>,
    pending: boolean,
    loaded: boolean
};

export type State = {
    "messages-inbox": MessageObj,
    "messages-sent": MessageObj,
    "messages-spam": MessageObj,
    "messages-trash": MessageObj
};

export const DEFAULT_STATE = {
    'messages-inbox': {
        data: [],
        pending: false,
        loaded: false
    },
    'messages-sent': {
        data: [],
        pending: false,
        loaded: false
    },
    'messages-spam': {
        data: [],
        pending: false,
        loaded: false
    },
    'messages-trash': {
        data: [],
        pending: false,
        loaded: false
    }
};

export const messages = (state: State = DEFAULT_STATE, action: Action) => {
    switch (action.type) {
        case GET_MESSAGES_INBOX_REQUEST:
            return {
                ...state,
                'messages-inbox': {
                    ...state['messages-inbox'],
                    pending: true
                }
            };
        case GET_MESSAGES_INBOX_SUCCESS:
            return {
                ...state,
                'messages-inbox': {
                    data: action.response,
                    pending: false,
                    loaded: true
                }
            };
        case GET_MESSAGES_INBOX_FAILURE:
            return {
                ...state,
                'messages-inbox': {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case GET_MESSAGES_SENT_REQUEST:
            return {
                ...state,
                'messages-sent': {
                    ...state['messages-sent'],
                    pending: true
                }
            };
        case GET_MESSAGES_SENT_SUCCESS:
            return {
                ...state,
                'messages-sent': {
                    data: action.response,
                    pending: false,
                    loaded: true
                }
            };
        case GET_MESSAGES_SENT_FAILURE:
            return {
                ...state,
                'messages-sent': {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case GET_MESSAGES_SPAM_REQUEST:
            return {
                ...state,
                'messages-spam': {
                    ...state['messages-spam'],
                    pending: true
                }
            };
        case GET_MESSAGES_SPAM_SUCCESS:
            return {
                ...state,
                'messages-spam': {
                    data: action.response,
                    pending: false,
                    loaded: true
                }
            };
        case GET_MESSAGES_SPAM_FAILURE:
            return {
                ...state,
                'messages-spam': {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case GET_MESSAGES_TRASH_REQUEST:
            return {
                ...state,
                'messages-trash': {
                    ...state['messages-trash'],
                    pending: true
                }
            };
        case GET_MESSAGES_TRASH_SUCCESS:
            return {
                ...state,
                'messages-trash': {
                    data: action.response,
                    pending: false,
                    loaded: true
                }
            };
        case GET_MESSAGES_TRASH_FAILURE:
            return {
                ...state,
                'messages-trash': {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case POST_MESSAGE_REQUEST:
            return {...state};
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                [action.collection]: {
                    data: [...state[action.collection].data, action.response],
                    pending: false,
                    loaded: true
                }
            };
        case POST_MESSAGE_FAILURE:
            return {
                ...state,
                [action.collection]: {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case UPDATE_MESSAGE_REQUEST:
            return {...state};
        case UPDATE_MESSAGE_SUCCESS: {
            const mssgUpdateId = action.id;
            return {
                ...state,
                [action.collection]: {
                    data: state[action.collection].data.map(item => (item._id.$oid === mssgUpdateId
                        ? {...item, isRead: 'true'}
                        : item)),
                    pending: false,
                    loaded: true
                }
            };
        }
        case UPDATE_MESSAGE_FAILURE:
            return {
                ...state,
                [action.collection]: {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        case DELETE_MESSAGE_REQUEST:
            return {...state};
        case DELETE_MESSAGE_SUCCESS: {
            const mssgDeleteId = action.id;
            return {
                ...state,
                [action.collection]: {
                    data: state[action.collection].data.filter(item => item._id.$oid !== mssgDeleteId),
                    pending: false,
                    loaded: true
                }
            };
        }
        case DELETE_MESSAGE_FAILURE:
            return {
                ...state,
                [action.collection]: {
                    data: [],
                    pending: false,
                    loaded: false
                }
            };

        default:
            return state;
    }
};
