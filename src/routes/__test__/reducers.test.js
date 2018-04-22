import {messages, DEFAULT_STATE as initialState} from '../reducers';
import {GET_MESSAGES_INBOX_REQUEST, GET_MESSAGES_INBOX_SUCCESS, GET_MESSAGES_INBOX_FAILURE} from '../../constants';

describe('Messages reducer', () => {
    const initialMessagesState = {
        ...initialState,
        'messages-inbox': {
            data: [],
            pending: false,
            loaded: false
        }
    };

    it('Should return the initial state', () => {
        expect(messages(initialState, GET_MESSAGES_INBOX_REQUEST)).toEqual(initialState);
        expect(messages(initialState, GET_MESSAGES_INBOX_SUCCESS)).toEqual(initialState);
        expect(messages(initialState, GET_MESSAGES_INBOX_FAILURE)).toEqual(initialState);
    });

    it('Should pending true if async action request', () => {
        const action = {type: GET_MESSAGES_INBOX_REQUEST};

        const expectedState = {
            ...initialMessagesState,
            'messages-inbox': {
                ...initialMessagesState['messages-inbox'],
                pending: true
            }
        };

        expect(messages(initialMessagesState, action)).toEqual(expectedState);
    });

    it('Should loaded true if async action success', () => {
        const action = {type: GET_MESSAGES_INBOX_SUCCESS};

        const expectedState = {
            ...initialMessagesState,
            'messages-inbox': {
                data: action.response,
                pending: false,
                loaded: true
            }
        };

        expect(messages(initialMessagesState, action)).toEqual(expectedState);
    });

    it('Should pending and loaded false(initial state) if async action failure', () => {
        const action = {type: GET_MESSAGES_INBOX_FAILURE};

        expect(messages(initialMessagesState, action)).toEqual(initialMessagesState);
    });
});
